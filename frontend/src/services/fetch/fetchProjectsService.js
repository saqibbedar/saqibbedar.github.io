import { fetchWithCache } from "./cacheService";

const PROJECTS_CACHE_KEY = "data:projects:v4";
const GITHUB_CACHE_TTL = 15 * 60 * 1000;
const NPM_CACHE_TTL = 15 * 60 * 1000;

const DEFAULT_OWNER_AVATAR = "/images/author.avif";

const formatRepoTitle = (repoName) =>
  String(repoName || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .trim();

const getProjectPlaceholderImage = (title, category) => {
  const paletteMap = {
    frontend: {
      from: "#0F172A",
      to: "#0EA5E9",
      accent: "#67E8F9",
    },
    fullstack: {
      from: "#111827",
      to: "#14B8A6",
      accent: "#6EE7B7",
    },
    backend: {
      from: "#1E1B4B",
      to: "#2563EB",
      accent: "#93C5FD",
    },
    "developer-tools": {
      from: "#111827",
      to: "#334155",
      accent: "#CBD5E1",
    },
    general: {
      from: "#1F2937",
      to: "#475569",
      accent: "#E2E8F0",
    },
  };

  const normalizedCategory = String(category || "general").toLowerCase();
  const palette = paletteMap[normalizedCategory] || paletteMap.general;
  const cleanTitle = String(title || "Project").trim();
  const safeTitle = cleanTitle.replace(/[&<>"']/g, "");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-label="${safeTitle}"><defs><linearGradient id="projectBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette.from}"/><stop offset="100%" stop-color="${palette.to}"/></linearGradient><radialGradient id="glow" cx="0.18" cy="0.2" r="0.8"><stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.45"/><stop offset="100%" stop-color="${palette.accent}" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="900" fill="url(#projectBg)"/><rect width="1600" height="900" fill="url(#glow)"/><g opacity="0.18"><circle cx="1300" cy="180" r="300" fill="${palette.accent}"/><circle cx="260" cy="760" r="260" fill="${palette.accent}"/></g><g transform="translate(170 238)"><rect x="0" y="0" width="190" height="190" rx="34" fill="rgba(255,255,255,0.14)"/><text x="95" y="121" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="72" font-weight="700" fill="white">&lt;/&gt;</text></g><text x="170" y="558" font-family="ui-sans-serif, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="90" font-weight="700" fill="white">${safeTitle}</text></svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const toFullDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};

const toTitleCase = (value) =>
  String(value || "")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

const getGitHubLicenseUrl = (repoUrl, licenseKey, licenseName) => {
  if (!repoUrl) return null;

  const normalizedTab = String(licenseKey || licenseName || "LICENSE")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${repoUrl}?tab=${normalizedTab || "LICENSE"}-1-ov-file`;
};

const parseNpmPackageName = (npmUrl) => {
  if (!npmUrl) return null;

  try {
    const url = new URL(npmUrl);
    if (!url.hostname.includes("npmjs.com")) return null;

    const parts = url.pathname.split("/").filter(Boolean);
    if (parts[0] !== "package") return null;

    // Supports scoped packages: /package/@scope/name
    const packageName = decodeURIComponent(parts.slice(1).join("/"));
    return packageName || null;
  } catch {
    return null;
  }
};

const fetchNpmMonthlyDownloads = async (packageName) => {
  if (!packageName) return null;

  return fetchWithCache(
    `npm:downloads:last-month:${packageName}`,
    async () => {
      const response = await fetch(
        `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(packageName)}`
      );

      if (!response.ok) {
        throw new Error(`npm downloads fetch failed: ${response.status}`);
      }

      const payload = await response.json();
      return Number.isFinite(Number(payload?.downloads))
        ? Number(payload.downloads)
        : null;
    },
    NPM_CACHE_TTL
  ).catch(() => null);
};

const cloneProject = (project) => ({
  ...project,
  description: project?.description ? { ...project.description } : {},
  media: project?.media ? { ...project.media } : {},
  repository: project?.repository ? { ...project.repository } : {},
  owner: project?.owner ? { ...project.owner } : {},
  package: project?.package ? { ...project.package } : {},
  tech: project?.tech
    ? {
        ...project.tech,
        stack: Array.isArray(project.tech.stack) ? [...project.tech.stack] : [],
        languages: Array.isArray(project.tech.languages)
          ? project.tech.languages.map((language) => ({ ...language }))
          : [],
      }
    : {},
  stats: project?.stats ? { ...project.stats } : {},
  timestamps: project?.timestamps ? { ...project.timestamps } : {},
  contributors: Array.isArray(project?.contributors)
    ? project.contributors.map((contributor) => ({ ...contributor }))
    : [],
  features: Array.isArray(project?.features) ? [...project.features] : [],
  tags: Array.isArray(project?.tags) ? [...project.tags] : [],
  links: project?.links ? { ...project.links } : {},
});

const normalizeStaticProject = (project) => {
  const sourceProject = cloneProject(project);

  const shortDescription =
    sourceProject?.description?.short ||
    sourceProject?.shortDescription ||
    sourceProject?.description ||
    "";

  const fullDescription =
    sourceProject?.description?.full ||
    sourceProject?.fullDescription ||
    shortDescription;

  const links = {
    github:
      sourceProject?.links?.github || sourceProject?.repository?.url || null,
    npm: sourceProject?.links?.npm || null,
    marketplace: sourceProject?.links?.marketplace || null,
    docs: sourceProject?.links?.docs || null,
    demo: sourceProject?.links?.demo || null,
    playground: sourceProject?.links?.playground || null,
    docker: sourceProject?.links?.docker || null,
    vscode: sourceProject?.links?.vscode || null,
    pypi: sourceProject?.links?.pypi || null,
    orcid: sourceProject?.links?.orcid || null,
    other: Array.isArray(sourceProject?.links?.other)
      ? sourceProject.links.other
      : [],
  };

  const staticLanguages = Array.isArray(sourceProject?.tech?.languages)
    ? sourceProject.tech.languages.map((language, index) => ({
        name: language.name,
        percentage: Number.isFinite(Number(language.percentage))
          ? Number(language.percentage)
          : null,
        isMain: Boolean(language.primary || language.isMain || index === 0),
      }))
    : [];

  const staticLicense = sourceProject?.package?.license || null;
  const staticLicenseUrl = getGitHubLicenseUrl(
    links.github,
    null,
    staticLicense
  );
  const fallbackTitle =
    sourceProject?.title || formatRepoTitle(sourceProject?.slug);
  const staticCategory = toTitleCase(sourceProject?.category) || "General";
  const fallbackImage = getProjectPlaceholderImage(
    fallbackTitle,
    sourceProject?.category || staticCategory
  );
  const thumbnail =
    sourceProject?.media?.thumbnail ||
    sourceProject?.thumbnail ||
    fallbackImage;
  const banner =
    sourceProject?.media?.banner || sourceProject?.banner || fallbackImage;

  return {
    ...sourceProject,
    _id: sourceProject?._id || sourceProject?.slug,
    id: sourceProject?._id || sourceProject?.slug,
    slug: sourceProject?.slug,
    title: fallbackTitle,
    description: {
      short: shortDescription,
      full: fullDescription,
    },
    shortDescription,
    fullDescription,
    media: {
      thumbnail,
      banner,
    },
    thumbnail,
    banner,
    repository: {
      provider: sourceProject?.repository?.provider || "github",
      owner: sourceProject?.repository?.owner || sourceProject?.owner?.login,
      name: sourceProject?.repository?.name || sourceProject?.slug,
      url: sourceProject?.repository?.url || links.github,
    },
    links,
    owner: {
      login: sourceProject?.owner?.login || "",
      name: sourceProject?.owner?.name || sourceProject?.owner?.login || "",
      avatar: sourceProject?.owner?.avatar || DEFAULT_OWNER_AVATAR,
      profileUrl: sourceProject?.owner?.profileUrl || null,
      repositoryRole: "Owner",
    },
    contributors: Array.isArray(sourceProject?.contributors)
      ? sourceProject.contributors.map((contributor) => ({
          login: contributor.login,
          name: contributor.name || contributor.login,
          avatarUrl: contributor.avatar || contributor.avatarUrl,
          profileUrl: contributor.githubUrl || contributor.profileUrl,
          role: contributor.role || "Contributor",
          isOwner: false,
        }))
      : [],
    stats: {
      stars: Number(sourceProject?.stats?.stars || 0),
      forks: Number(sourceProject?.stats?.forks || 0),
      watchers: Number(sourceProject?.stats?.watchers || 0),
      downloads: Number.isFinite(Number(sourceProject?.stats?.downloads))
        ? Number(sourceProject.stats.downloads)
        : null,
      showDownloads:
        typeof sourceProject?.stats?.showDownloads === "boolean"
          ? sourceProject.stats.showDownloads
          : Boolean(links.npm),
    },
    package: {
      version: sourceProject?.package?.version || null,
      license: staticLicense,
    },
    tech: {
      stack: Array.isArray(sourceProject?.tech?.stack)
        ? sourceProject.tech.stack
        : [],
      languages: staticLanguages,
    },
    metadata: {
      stars: Number(sourceProject?.stats?.stars || 0),
      forks: Number(sourceProject?.stats?.forks || 0),
      watchers: Number(sourceProject?.stats?.watchers || 0),
      downloads: Number.isFinite(Number(sourceProject?.stats?.downloads))
        ? Number(sourceProject.stats.downloads)
        : null,
      showDownloads:
        typeof sourceProject?.stats?.showDownloads === "boolean"
          ? sourceProject.stats.showDownloads
          : Boolean(links.npm),
      language:
        staticLanguages.find((language) => language.isMain)?.name || null,
      languages: staticLanguages,
      license: {
        name: staticLicense,
        key: null,
        url: staticLicenseUrl,
        spdxId: null,
      },
      issues: {
        count: 0,
        open: 0,
      },
      topics: [],
      createdAt: toFullDate(sourceProject?.timestamps?.createdAt),
      updatedAt: toFullDate(sourceProject?.timestamps?.updatedAt),
      private: sourceProject?.visibility === "private",
      archived: sourceProject?.status === "archived",
      isTemplate: false,
      allowForking:
        Boolean(links.github) && sourceProject?.visibility !== "private",
      defaultBranch: null,
      homepage: null,
      githubId: null,
      repoName: sourceProject?.repository?.name || sourceProject?.slug || null,
      repoFullName: null,
      repoUrl: links.github,
      cloneUrl: null,
    },
    features: Array.isArray(sourceProject?.features)
      ? sourceProject.features
      : [],
    tags: Array.isArray(sourceProject?.tags) ? sourceProject.tags : [],
    category: staticCategory,
    status: sourceProject?.status || "active",
    visibility: sourceProject?.visibility || "public",
    featured: Boolean(sourceProject?.featured),
    timestamps: {
      createdAt: toFullDate(sourceProject?.timestamps?.createdAt),
      updatedAt: toFullDate(sourceProject?.timestamps?.updatedAt),
    },
    github: {
      url: links.github,
      repoUrl: links.github,
      cloneUrl: null,
      sshUrl: null,
      defaultBranch: null,
      fullName: null,
    },
  };
};

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
        contributorsUrl: payload.contributors_url || null,
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
      const sourceProject = normalizeStaticProject(project);
      const parsed = parseGitHubRepo(
        sourceProject?.repository?.url || sourceProject?.links?.github
      );

      const npmPackageName = parseNpmPackageName(sourceProject?.links?.npm);
      const shouldShowDownloads = Boolean(
        sourceProject?.metadata?.showDownloads
      );
      const npmDownloads =
        shouldShowDownloads && npmPackageName
          ? await fetchNpmMonthlyDownloads(npmPackageName)
          : null;

      if (!parsed) {
        return {
          ...sourceProject,
          stats: {
            ...sourceProject.stats,
            downloads:
              shouldShowDownloads && Number.isFinite(Number(npmDownloads))
                ? Number(npmDownloads)
                : sourceProject.stats.downloads,
          },
          metadata: {
            ...sourceProject.metadata,
            downloads:
              shouldShowDownloads && Number.isFinite(Number(npmDownloads))
                ? Number(npmDownloads)
                : sourceProject.metadata.downloads,
          },
        };
      }

      const liveMeta = await fetchGitHubRepoMeta(parsed.owner, parsed.repo);
      if (!liveMeta) {
        return {
          ...sourceProject,
          stats: {
            ...sourceProject.stats,
            downloads:
              shouldShowDownloads && Number.isFinite(Number(npmDownloads))
                ? Number(npmDownloads)
                : sourceProject.stats.downloads,
          },
          metadata: {
            ...sourceProject.metadata,
            downloads:
              shouldShowDownloads && Number.isFinite(Number(npmDownloads))
                ? Number(npmDownloads)
                : sourceProject.metadata.downloads,
          },
        };
      }

      const existingLanguages = Array.isArray(sourceProject?.tech?.languages)
        ? sourceProject.tech.languages
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
        githubLanguages.length > 0
          ? githubLanguages.map((language, index) => ({
              name: language.name,
              percentage: language.percentage,
              isMain: index === 0,
            }))
          : existingLanguages;
      const mainLanguage =
        languageRecords.find((language) => language.isMain)?.name ||
        liveMeta.language ||
        existingLanguages.find((language) => language.isMain)?.name ||
        null;
      const licenseName =
        liveMeta.license?.name || sourceProject?.package?.license || null;
      const licenseUrl =
        getGitHubLicenseUrl(
          liveMeta.htmlUrl || sourceProject?.links?.github,
          liveMeta.license?.key,
          licenseName
        ) ||
        sourceProject?.metadata?.license?.url ||
        null;

      const resolvedDownloads =
        shouldShowDownloads && Number.isFinite(Number(npmDownloads))
          ? Number(npmDownloads)
          : sourceProject.stats.downloads;

      const resolvedCategory = toTitleCase(sourceProject.category);

      const mergedTags = Array.from(
        new Set(
          [
            ...(Array.isArray(sourceProject.tags) ? sourceProject.tags : []),
            ...(liveMeta.topics || []),
            ...(Array.isArray(sourceProject.tech?.stack)
              ? sourceProject.tech.stack
              : []),
            ...languageRecords.map((language) => language.name),
            mainLanguage,
            resolvedCategory,
            licenseName,
          ].filter(Boolean)
        )
      );

      return {
        ...sourceProject,
        _id: liveMeta.id ? String(liveMeta.id) : sourceProject._id,
        id: liveMeta.id
          ? String(liveMeta.id)
          : sourceProject.id || sourceProject._id,
        slug: repoSlug || sourceProject.slug,
        title: title || sourceProject.title,
        description: {
          short: sourceProject.shortDescription,
          full:
            sourceProject.fullDescription ||
            liveMeta.description ||
            sourceProject.shortDescription,
        },
        shortDescription: sourceProject.shortDescription,
        fullDescription:
          sourceProject.fullDescription ||
          liveMeta.description ||
          sourceProject.shortDescription,
        owner: {
          login: owner?.login || parsed.owner,
          name: owner?.name || owner?.login || parsed.owner,
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
          downloads: resolvedDownloads,
          showDownloads: shouldShowDownloads,
          language: mainLanguage,
          languages: languageRecords,
          createdAt:
            toFullDate(liveMeta.createdAt) ||
            sourceProject.timestamps?.createdAt ||
            sourceProject.metadata?.createdAt ||
            null,
          updatedAt:
            toFullDate(liveMeta.updatedAt) ||
            sourceProject.timestamps?.updatedAt ||
            sourceProject.metadata?.updatedAt ||
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
        stats: {
          ...sourceProject.stats,
          stars: liveMeta.stars,
          forks: liveMeta.forks,
          watchers: liveMeta.watchers,
          downloads: resolvedDownloads,
          showDownloads: shouldShowDownloads,
        },
        package: {
          ...sourceProject.package,
          license: licenseName,
        },
        tech: {
          ...sourceProject.tech,
          languages: languageRecords,
        },
        tags: mergedTags,
        topics: liveMeta.topics || [],
        category: resolvedCategory || sourceProject.category,
        visibility: liveMeta.private
          ? "private"
          : sourceProject.visibility || "public",
        status: liveMeta.archived
          ? "archived"
          : sourceProject.status || "active",
        featured: Boolean(sourceProject.featured),
        timestamps: {
          createdAt:
            toFullDate(liveMeta.createdAt) ||
            sourceProject.timestamps?.createdAt,
          updatedAt:
            toFullDate(liveMeta.updatedAt) ||
            sourceProject.timestamps?.updatedAt,
        },
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
