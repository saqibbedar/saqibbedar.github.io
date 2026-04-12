import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaLock,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaArrowLeft,
  FaCalendarAlt,
  FaCode,
  FaDownload,
  FaBalanceScale,
  FaLink,
} from "react-icons/fa";
import { SiNpm, SiOrcid, SiPypi } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { getViewMeta } from "@/assets";

const MAX_VISIBLE_AVATARS = 5;

// Helper function to get status badge
const getStatusBadge = (status, visibility) => {
  if (visibility === "private") {
    return {
      text: "Private",
      className: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      icon: <FaLock className="w-3 h-3" />,
    };
  }
  const badges = {
    active: {
      text: "Active",
      className: "bg-green-500/10 text-green-500 border-green-500/20",
      icon: null,
    },
    ongoing: {
      text: "In Development",
      className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      icon: null,
    },
    archived: {
      text: "Archived",
      className: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      icon: null,
    },
    deprecated: {
      text: "Deprecated",
      className: "bg-red-500/10 text-red-500 border-red-500/20",
      icon: null,
    },
  };
  return badges[status] || badges.active;
};

const getRepositoryHref = (project) =>
  project.github?.repoUrl || project.links?.github || null;

const getProjectLanguages = (project) => project?.metadata?.languages || [];

const getPrimaryLanguage = (project) =>
  getProjectLanguages(project).find((language) => language.isMain)?.name ||
  getProjectLanguages(project)[0]?.name ||
  project?.metadata?.language ||
  "";

const getContributorStack = (project) => {
  const owner = project?.owner
    ? {
        login: project.owner.login || project.owner.name,
        name: project.owner.name || project.owner.login,
        avatarUrl: project.owner.avatar || project.owner.avatarUrl,
        role: project.owner.repositoryRole || "Owner",
        isOwner: true,
      }
    : null;

  const contributors = Array.isArray(project?.contributors)
    ? project.contributors.filter((contributor) => !contributor?.isOwner)
    : [];

  const ownerIdentity = [owner?.login, owner?.name]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase());
  const seen = new Set();

  return [owner, ...contributors].filter(Boolean).filter((contributor) => {
    const contributorIdentity = [
      contributor.login,
      contributor.name,
      contributor.profileUrl,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());

    const hasOwnerMatch = contributorIdentity.some((value) =>
      ownerIdentity.includes(value)
    );
    const uniqueKey = contributorIdentity[0] || contributor.profileUrl || "";

    if (hasOwnerMatch && seen.has("owner")) {
      return false;
    }

    if (!uniqueKey) {
      return true;
    }

    if (seen.has(uniqueKey)) {
      return false;
    }

    seen.add(uniqueKey);
    if (hasOwnerMatch) {
      seen.add("owner");
    }

    return true;
  });
};

const ContributorStack = ({ project }) => {
  const contributors = getContributorStack(project);
  const visibleContributors = contributors.slice(0, MAX_VISIBLE_AVATARS);
  const overflow = contributors.length - visibleContributors.length;

  return (
    <div className="flex items-center -space-x-2">
      {visibleContributors.map((contributor, index) => (
        <Link
          key={`${contributor.login || contributor.name || index}`}
          className="group relative"
          title={`${contributor.name || contributor.login} · ${
            contributor.role || "Contributor"
          }`}
          to={
            contributor.isOwner ? `/about` : `${contributor.profileUrl || "#"}`
          }
        >
          <img
            src={
              contributor.avatarUrl ||
              contributor.avatar ||
              "/images/author.png"
            }
            alt={contributor.name || contributor.login}
            className="w-10 h-10 rounded-full border-2 border-bg-card object-cover bg-bg-secondary"
          />
        </Link>
      ))}
      {overflow > 0 && getRepositoryHref(project) && (
        <a
          href={getRepositoryHref(project)}
          target="_blank"
          rel="noopener noreferrer"
          title={`${overflow} more contributor${overflow === 1 ? "" : "s"}`}
          className="w-8 h-8 rounded-full border-2 border-bg-card bg-bg-secondary flex items-center justify-center text-[10px] font-semibold text-fg-secondary hover:text-fg-primary transition-colors"
        >
          +{overflow}
        </a>
      )}
    </div>
  );
};

// Format date helper
const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Link Button Component
const LinkButton = ({ href, icon, label, primary = false }) => {
  if (!href) return null;
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2.5 font-medium rounded-full transition-all ${
        primary
          ? "bg-fg-primary text-bg-primary hover:opacity-90"
          : "border border-border hover:border-border-light text-fg-secondary hover:text-fg-primary"
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </a>
  );
};

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, loading } = useContent();
  const project = projects.find((p) => p._id === id || p.slug === id);

  useEffect(() => {
    if (!loading && !project) {
      navigate("/404");
    }
  }, [loading, project, navigate]);

  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-fg-muted">Loading project...</div>
      </div>
    );
  }

  const statusBadge = getStatusBadge(project.status, project.visibility);
  const projectUrl = getRepositoryHref(project);
  const primaryLanguage = getPrimaryLanguage(project);
  const languages = getProjectLanguages(project);
  const issueCount = project.metadata?.issues?.count ?? 0;
  const openIssueCount = project.metadata?.issues?.open ?? 0;
  const links = project.links || {};
  const showDownloads = Boolean(project.metadata?.showDownloads);
  const monthlyDownloads = Number.isFinite(Number(project.metadata?.downloads))
    ? Number(project.metadata.downloads)
    : null;
  const version = project.package?.version;
  const hasVersion = Boolean(
    version &&
    !["unknown", "null", "undefined"].includes(String(version).toLowerCase())
  );
  const featureList = Array.isArray(project.features) ? project.features : [];
  const techStack = Array.isArray(project.tech?.stack)
    ? project.tech.stack
    : [];
  const projectTags = Array.isArray(project.tags) ? project.tags : [];
  const relatedCandidates = projects
    .filter((candidate) => candidate._id !== project._id)
    .map((candidate) => {
      const sameCategory =
        String(candidate?.category || "").toLowerCase() ===
        String(project?.category || "").toLowerCase();

      const candidateTags = Array.isArray(candidate?.tags)
        ? candidate.tags.map((tag) => String(tag).toLowerCase())
        : [];
      const candidateStack = Array.isArray(candidate?.tech?.stack)
        ? candidate.tech.stack.map((item) => String(item).toLowerCase())
        : [];
      const baseTags = projectTags.map((tag) => String(tag).toLowerCase());
      const baseStack = techStack.map((item) => String(item).toLowerCase());
      const candidatePrimaryLanguage = String(
        candidate?.metadata?.language ||
          candidate?.tech?.languages?.find((language) => language?.isMain)
            ?.name ||
          ""
      ).toLowerCase();
      const currentPrimaryLanguage = String(
        primaryLanguage || ""
      ).toLowerCase();

      const tagOverlap = candidateTags.filter((tag) =>
        baseTags.includes(tag)
      ).length;
      const stackOverlap = candidateStack.filter((item) =>
        baseStack.includes(item)
      ).length;
      const languageMatch =
        Boolean(candidatePrimaryLanguage) &&
        Boolean(currentPrimaryLanguage) &&
        candidatePrimaryLanguage === currentPrimaryLanguage;

      const isRelated = sameCategory || tagOverlap >= 2 || stackOverlap >= 2;
      const isClose =
        !isRelated && (tagOverlap > 0 || stackOverlap > 0 || languageMatch);
      const score =
        (sameCategory ? 3 : 0) +
        tagOverlap * 2 +
        stackOverlap +
        (languageMatch ? 1 : 0) +
        (candidate?.featured ? 1 : 0);

      return { candidate, score, isRelated, isClose };
    })
    .sort((left, right) => right.score - left.score);

  const relatedProjects = relatedCandidates
    .filter((entry) => entry.isRelated)
    .slice(0, 2)
    .map((entry) => entry.candidate);
  const suggestedProjects = relatedCandidates
    .filter((entry) => entry.isClose)
    .slice(0, 2)
    .map((entry) => entry.candidate);
  const youMayLikeProjects = relatedCandidates
    .slice(0, 2)
    .map((entry) => entry.candidate);

  const recommendationTitle =
    relatedProjects.length > 0
      ? "Related Projects"
      : suggestedProjects.length > 0
        ? "Suggested Projects"
        : "You May Like";
  const recommendationProjects =
    relatedProjects.length > 0
      ? relatedProjects
      : suggestedProjects.length > 0
        ? suggestedProjects
        : youMayLikeProjects;
  const resolvedLicense = project.metadata?.license;
  const licenseName =
    (typeof resolvedLicense === "object" && resolvedLicense?.name) ||
    (typeof resolvedLicense === "string" ? resolvedLicense : null) ||
    project.package?.license ||
    "-";
  const licenseUrl =
    typeof resolvedLicense === "object" && resolvedLicense?.url
      ? resolvedLicense.url
      : null;
  const updatedAt =
    project.metadata?.updatedAt ||
    project.metadata?.lastUpdated ||
    project.timestamps?.updatedAt ||
    null;
  const meta = getViewMeta("project", { project });

  return (
    <div className="min-h-screen">
      <PageMeta {...meta} />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors mb-6"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Status & Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className={`flex items-center gap-1.5 px-3 py-1 text-sm font-medium border rounded-full ${statusBadge.className}`}
              >
                {statusBadge.icon}
                {statusBadge.text}
              </span>
              {project.category && (
                <span className="px-3 py-1 text-sm font-medium text-fg-primary bg-bg-card border border-border rounded-full">
                  {project.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary mb-4 leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed mb-6">
              {project.fullDescription ||
                project.description?.full ||
                project.shortDescription ||
                project.description?.short}
            </p>

            {/* Stats (for public projects) */}
            {project.visibility === "public" && (
              <div className="flex items-center flex-wrap gap-4 text-sm text-fg-secondary mb-6">
                <div className="flex items-center gap-1.5">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-fg-primary">
                    {project.metadata.stars}
                  </span>
                  <span className="text-fg-muted">stars</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCodeBranch className="w-4 h-4" />
                  <span>{project.metadata.forks} forks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye className="w-4 h-4" />
                  <span>{project.metadata.watchers} watchers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCode className="w-4 h-4" />
                  <span>{primaryLanguage || "-"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaBalanceScale className="w-4 h-4" />
                  <span>{licenseName}</span>
                </div>
                {showDownloads && monthlyDownloads !== null && (
                  <div className="flex items-center gap-1.5">
                    <FaDownload className="w-4 h-4" />
                    <span>
                      {monthlyDownloads.toLocaleString()} monthly downloads
                    </span>
                  </div>
                )}
                {hasVersion && (
                  <div className="flex items-center gap-1.5">
                    <FaCode className="w-4 h-4" />
                    <span>v{version}</span>
                  </div>
                )}
              </div>
            )}

            {languages.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap mb-6">
                {languages.map((language) => (
                  <span
                    key={language.name}
                    className="px-3 py-1 text-xs font-medium text-fg-secondary bg-bg-card border border-border rounded-full"
                  >
                    {language.name}
                    {typeof language.percentage === "number"
                      ? ` ${language.percentage}%`
                      : ""}
                  </span>
                ))}
              </div>
            )}

            {/* Contributors */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-3">
                Contributors
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <ContributorStack project={project} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <LinkButton
                href={projectUrl}
                icon={FaGithub}
                label="View on GitHub"
                primary
              />
              <LinkButton
                href={links.demo}
                icon={FaExternalLinkAlt}
                label="Live Demo"
              />
              <LinkButton
                href={links.docs}
                icon={FaExternalLinkAlt}
                label="Docs"
              />
              <LinkButton
                href={links.playground}
                icon={FaExternalLinkAlt}
                label="Playground"
              />
              <LinkButton
                href={links.marketplace}
                icon={FaExternalLinkAlt}
                label="Marketplace"
              />
              <LinkButton href={links.docker} icon={FaDocker} label="Docker" />
              <LinkButton href={links.npm} icon={SiNpm} label="npm" />
              <LinkButton
                href={links.vscode}
                icon={VscVscode}
                label="VS Code"
              />
              <LinkButton href={links.pypi} icon={SiPypi} label="PyPI" />
              <LinkButton href={links.orcid} icon={SiOrcid} label="ORCID" />
              {/* Other Links */}
              {links?.other?.map((link, index) => (
                <LinkButton
                  key={index}
                  href={link.url}
                  icon={FaLink}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* Right - Thumbnail */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={project.thumbnail || project.media?.thumbnail}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              {/* Overlay with quick info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-xs font-medium">
                      {primaryLanguage || "-"}
                    </span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  {updatedAt && (
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>Updated {formatDate(updatedAt)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats Footer */}
      <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaStar className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.stars}
              </p>
              <p className="text-sm text-fg-muted">Stars</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaCodeBranch className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.forks}
              </p>
              <p className="text-sm text-fg-muted">Forks</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaEye className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.watchers}
              </p>
              <p className="text-sm text-fg-muted">Watchers</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaCalendarAlt className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {new Date(
                  project.metadata?.createdAt || project.createdAt
                ).getFullYear()}
              </p>
              <p className="text-sm text-fg-muted">Started</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
            {techStack.length > 0 && (
              <div className="p-4 bg-bg-card border border-border rounded-xl">
                <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-fg-secondary">
                  {techStack.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {projectTags.length > 0 && (
                  <>
                    <p className="text-xs uppercase tracking-wider text-fg-muted mt-4 mb-2">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-fg-secondary">
                      {projectTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/30 border border-border-light rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {techStack.length === 0 && projectTags.length > 0 && (
              <div className="p-4 bg-bg-card border border-border rounded-xl">
                <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-fg-secondary">
                  {projectTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/30 border border-border-light rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {featureList.length > 0 && (
              <div className="p-4 bg-bg-card border border-border rounded-xl">
                <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">
                  Key Features
                </p>
                <ul className="space-y-1 text-sm text-fg-secondary">
                  {featureList.slice(0, 6).map((feature) => (
                    <li key={feature} className="leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 bg-bg-card border border-border rounded-xl">
              <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">
                Repository flags
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-fg-secondary">
                <span className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
                  {project.metadata?.private ? "Private" : "Public"}
                </span>
                <span className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
                  {project.status === "completed"
                    ? "Completed"
                    : project.metadata?.archived
                      ? "Archived"
                      : project.status || "Active"}
                </span>
                <span className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
                  {project.metadata?.isTemplate ? "Template" : "Not template"}
                </span>
                <span className="px-2 py-0.5 text-[0.8rem] text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
                  {project.metadata?.allowForking
                    ? "Forking on"
                    : "Forking off"}
                </span>
              </div>
            </div>
            {projectUrl && (
              <div className="p-4 bg-bg-card border border-border rounded-xl">
                <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">
                  Issues and license
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-fg-secondary">
                  <span>{issueCount} total issues</span>
                  <span>{openIssueCount} open</span>
                  {hasVersion && <span>Version {version}</span>}
                  {licenseUrl ? (
                    <a
                      href={licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-primary hover:underline"
                    >
                      {licenseName}
                    </a>
                  ) : (
                    <span>{licenseName}</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {recommendationProjects.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-fg-primary mb-4">
                {recommendationTitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendationProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject._id}
                    to={`/projects/${relatedProject.slug || relatedProject._id}`}
                    className="p-4 sm:p-5 rounded-xl border border-border bg-bg-card hover:border-border-light transition-colors"
                  >
                    <p className="text-base sm:text-lg font-semibold text-fg-primary line-clamp-1 leading-snug">
                      {relatedProject.title}
                    </p>
                    <p className="text-sm text-fg-secondary mt-2 line-clamp-2 leading-relaxed">
                      {relatedProject.shortDescription ||
                        relatedProject.description?.short ||
                        "Open project details"}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Project;
