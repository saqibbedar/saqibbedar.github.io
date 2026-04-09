import { fetchWithCache } from "./cacheService";

const PROJECTS_CACHE_KEY = "data:projects";
const GITHUB_CACHE_TTL = 15 * 60 * 1000;

const DEFAULT_OWNER_AVATAR = "/images/author.png";

const formatRepoTitle = (repoName) =>
  String(repoName || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .trim();

const toFullDate = (value) => (value ? new Date(value).toISOString() : null);

const cloneProject = (project) => ({
  ...project,
  contributors: Array.isArray(project?.contributors)
    ? project.contributors.map((contributor) => ({ ...contributor }))
    : [],
  tags: Array.isArray(project?.tags) ? [...project.tags] : project?.tags,
  links: project?.links ? { ...project.links } : {},
  metadata: project?.metadata
    ? {
        ...project.metadata,
        languages: Array.isArray(project.metadata.languages)
          ? project.metadata.languages.map((language) => ({ ...language }))
          : [],
      }
    : {},
});

/**
 * Parses owner/repository from a GitHub repository URL.
 * @param {string|null} githubUrl GitHub URL.
 * @returns {{ owner: string, repo: string }|null} Parsed repository identity.
 */
const parseGitHubRepo = (githubUrl) => {
  if (!githubUrl) return null;

  try {
    const url = new URL(githubUrl);
    if (!url.hostname.includes("github.com")) return null;

    const [owner, repo] = url.pathname.replace(/^\//, "").split("/");
    if (!owner || !repo) return null;

    return { owner, repo };
  } catch {
    return null;
  }
};

/**
 * Fetches live repository metadata from GitHub API with cache.
 * Preconditions:
 * - owner and repo are valid GitHub repository identifiers.
 * Postconditions:
 * - returns null on API error or rate-limit hit.
 * - returns stars/forks/watchers/language metadata on success.
 * @param {string} owner GitHub owner.
 * @param {string} repo GitHub repository name.
 * @returns {Promise<Object|null>} Repo metadata or null.
 */
const fetchGitHubRepoMeta = async (owner, repo) => {
  const cacheKey = `github:${owner}/${repo}`;

  return fetchWithCache(
    cacheKey,
    async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `GitHub API failed for ${owner}/${repo}: ${response.status}`
        );
      }

      const payload = await response.json();
      return {
        stars: payload.stargazers_count || 0,
        forks: payload.forks_count || 0,
        watchers: payload.subscribers_count || payload.watchers_count || 0,
        language: payload.language || null,
        languagesUrl: payload.languages_url || null,
        createdAt: payload.created_at || null,
        updatedAt: payload.updated_at || null,
        pushedAt: payload.pushed_at || null,
        private: Boolean(payload.private),
        archived: Boolean(payload.archived),
        isTemplate: Boolean(payload.is_template),
        allowForking: Boolean(payload.allow_forking),
        defaultBranch: payload.default_branch || null,
        homepage: payload.homepage || null,
        description: payload.description || null,
        issuesOpen: payload.open_issues_count || 0,
        issuesTotal: payload.open_issues_count || 0,
        license: payload.license || null,
        owner: payload.owner || null,
        id: payload.id || null,
        name: payload.name || null,
        fullName: payload.full_name || null,
        htmlUrl: payload.html_url || null,
        cloneUrl: payload.clone_url || null,
        sshUrl: payload.ssh_url || null,
        topics: Array.isArray(payload.topics) ? payload.topics : [],
        fork: Boolean(payload.fork),
        openIssues: payload.open_issues_count || 0,
      };
    },
    GITHUB_CACHE_TTL
  ).catch(() => null);
};

const fetchGitHubLanguages = async (languagesUrl, cacheKey) => {
  if (!languagesUrl) return [];

  return fetchWithCache(
    `${cacheKey}:languages`,
    async () => {
      const response = await fetch(languagesUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub languages fetch failed: ${response.status}`);
      }

      const payload = await response.json();
      const entries = Object.entries(payload || {});
      const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0) || 0;

      return entries
        .sort((left, right) => right[1] - left[1])
        .map(([name, bytes]) => ({
          name,
          bytes,
          percentage: total > 0 ? Math.round((bytes / total) * 100) : 0,
        }));
    },
    GITHUB_CACHE_TTL
  ).catch(() => []);
};

const fetchGitHubContributors = async (contributorsUrl, cacheKey) => {
  if (!contributorsUrl) return [];

  return fetchWithCache(
    `${cacheKey}:contributors`,
    async () => {
      const response = await fetch(contributorsUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub contributors fetch failed: ${response.status}`);
      }

      const payload = await response.json();
      return Array.isArray(payload)
        ? payload.map((contributor) => ({
            login: contributor.login,
            name: contributor.login,
            avatarUrl: contributor.avatar_url,
            profileUrl: contributor.html_url,
            contributions: contributor.contributions || 0,
            type: contributor.type || "User",
          }))
        : [];
    },
    GITHUB_CACHE_TTL
  ).catch(() => []);
};

const fetchIssueStats = async (owner, repo, cacheKey) => {
  const issueUrl = `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=1&sort=created&direction=desc`;

  return fetchWithCache(
    `${cacheKey}:issues`,
    async () => {
      const response = await fetch(issueUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub issues fetch failed: ${response.status}`);
      }

      const payload = await response.json();
      const linkHeader = response.headers.get("link") || "";
      const totalMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
      const total = totalMatch ? Number(totalMatch[1]) : payload.length;

      return {
        count: total,
      };
    },
    GITHUB_CACHE_TTL
  ).catch(() => ({ count: 0 }));
};

const buildAvatarStack = (owner, contributors) => {
  const ownerAvatar = owner?.avatar_url || DEFAULT_OWNER_AVATAR;
  const ownerLogin = owner?.login || "owner";

  const stack = [
    {
      login: ownerLogin,
      name: ownerLogin,
      avatarUrl: ownerAvatar,
      profileUrl: owner?.html_url || null,
      role: "Owner",
      contributions: Number.MAX_SAFE_INTEGER,
      isOwner: true,
    },
    ...(contributors || []).filter(
      (contributor) => contributor.login !== ownerLogin
    ),
  ];

  return stack.slice(0, 25);
};

/**
 * Merges static project data with fresh GitHub metadata when available.
 * @param {Array<Object>} projects Static project array from /data/json/projects.json.
 * @returns {Promise<Array<Object>>} Enriched project array.
 */
const mergeGitHubMeta = async (projects) => {
  const enriched = await Promise.all(
    projects.map(async (project) => {
      const sourceProject = cloneProject(project);
      const parsed = parseGitHubRepo(sourceProject?.links?.github);
      if (!parsed) {
        return sourceProject;
      }

      const liveMeta = await fetchGitHubRepoMeta(parsed.owner, parsed.repo);
      if (!liveMeta) return sourceProject;

      const existingLanguages = Array.isArray(
        sourceProject?.metadata?.languages
      )
        ? sourceProject.metadata.languages
        : [];
      const githubLanguages = await fetchGitHubLanguages(
        liveMeta.languagesUrl,
        `${PROJECTS_CACHE_KEY}:${parsed.owner}/${parsed.repo}`
      );
      const githubContributors = await fetchGitHubContributors(
        liveMeta.contributorsUrl ||
          `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/contributors`,
        `${PROJECTS_CACHE_KEY}:${parsed.owner}/${parsed.repo}`
      );
      const issueStats = await fetchIssueStats(
        parsed.owner,
        parsed.repo,
        `${PROJECTS_CACHE_KEY}:${parsed.owner}/${parsed.repo}`
      );

      const owner = liveMeta.owner;
      const combinedContributors = buildAvatarStack(
        owner,
        githubContributors
      ).map((contributor, index) => ({
        ...contributor,
        role:
          contributor.role || (index === 0 ? "Owner" : `Contributor ${index}`),
      }));

      const title = formatRepoTitle(
        liveMeta.name || sourceProject.slug || sourceProject.title
      );
      const repoSlug = liveMeta.name || sourceProject.slug;
      const languageRecords =
        githubLanguages.length > 0 ? githubLanguages : existingLanguages;
      const mainLanguage =
        languageRecords.find((language) => language.isMain)?.name ||
        liveMeta.language ||
        existingLanguages.find((language) => language.isMain)?.name ||
        null;
      const licenseName =
        liveMeta.license?.name || sourceProject?.metadata?.license || null;
      const licenseUrl = liveMeta.license?.url || null;

      return {
        ...sourceProject,
        _id: liveMeta.id ? String(liveMeta.id) : sourceProject._id,
        id: liveMeta.id
          ? String(liveMeta.id)
          : sourceProject.id || sourceProject._id,
        slug: repoSlug || sourceProject.slug,
        title: title || sourceProject.title,
        description:
          liveMeta.description ||
          sourceProject.description ||
          sourceProject.shortDescription,
        owner: {
          login: owner?.login || parsed.owner,
          name: owner?.login || parsed.owner,
          avatar: owner?.avatar_url || DEFAULT_OWNER_AVATAR,
          profileUrl: owner?.html_url || null,
          repositoryRole: "Owner",
        },
        contributors: combinedContributors,
        avatarStack: combinedContributors,
        github: {
          url: sourceProject?.links?.github || liveMeta.htmlUrl || null,
          repoUrl: liveMeta.htmlUrl || sourceProject?.links?.github || null,
          cloneUrl: liveMeta.cloneUrl || null,
          sshUrl: liveMeta.sshUrl || null,
          defaultBranch: liveMeta.defaultBranch || null,
          fullName: liveMeta.fullName || null,
        },
        metadata: {
          ...sourceProject.metadata,
          stars: liveMeta.stars,
          forks: liveMeta.forks,
          watchers: liveMeta.watchers,
          language: mainLanguage,
          languages: languageRecords,
          createdAt:
            toFullDate(liveMeta.createdAt) || sourceProject.createdAt || null,
          updatedAt:
            toFullDate(liveMeta.updatedAt) ||
            sourceProject.updatedAt ||
            sourceProject.metadata?.lastUpdated ||
            null,
          pushedAt: toFullDate(liveMeta.pushedAt) || null,
          private: liveMeta.private,
          archived: liveMeta.archived,
          isTemplate: liveMeta.isTemplate,
          allowForking: liveMeta.allowForking,
          fork: liveMeta.fork,
          license: {
            name: licenseName,
            key: liveMeta.license?.key || null,
            url: licenseUrl,
            spdxId: liveMeta.license?.spdx_id || null,
          },
          issues: {
            count: issueStats.count,
            open: liveMeta.issuesOpen,
          },
          topics: liveMeta.topics || sourceProject.topics || [],
          defaultBranch: liveMeta.defaultBranch || null,
          homepage: sourceProject.homepage || null,
          githubId: liveMeta.id,
          repoName: liveMeta.name,
          repoFullName: liveMeta.fullName,
          repoUrl: liveMeta.htmlUrl,
          cloneUrl: liveMeta.cloneUrl,
        },
        tags: Array.from(
          new Set(
            [
              ...(Array.isArray(sourceProject.tags) ? sourceProject.tags : []),
              ...(liveMeta.topics || []),
              ...(languageRecords || []).map((language) => language.name),
              mainLanguage,
              licenseName,
            ].filter(Boolean)
          )
        ),
        topics: liveMeta.topics || [],
        visibility: liveMeta.private
          ? "private"
          : sourceProject.visibility || "public",
        status: liveMeta.archived
          ? "archived"
          : sourceProject.status || "active",
        featured: Boolean(sourceProject.featured),
      };
    })
  );

  return enriched;
};

/**
 * Fetches projects using static JSON with GitHub enrichment fallback.
 * Preconditions:
 * - /public/data/json/projects.json exists and contains an array.
 * Postconditions:
 * - always returns an array (possibly empty).
 * - static data is returned even if GitHub API calls fail.
 * @returns {Promise<Array<Object>>} Project records.
 */
export const fetchProjectsService = async () =>
  fetchWithCache(PROJECTS_CACHE_KEY, async () => {
    const response = await fetch("/data/json/projects.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    const staticProjects = await response.json();
    if (!Array.isArray(staticProjects)) {
      return [];
    }

    return mergeGitHubMeta(staticProjects);
  }).catch((error) => {
    console.error("Error fetching projects:", error);
    return [];
  });
