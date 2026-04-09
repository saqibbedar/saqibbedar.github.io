import { fetchWithCache } from "./cacheService";

const normalizeDocPath = (docPath = "") => docPath.replace(/^\/+/, "");

export const fetchBlogDocService = async (docPath) => {
  const safeDocPath = normalizeDocPath(docPath);

  if (!safeDocPath || safeDocPath.includes("..")) {
    throw new Error("Invalid blog document path");
  }

  return fetchWithCache(`doc:${safeDocPath}`, async () => {
    const response = await fetch(`/data/blogs/${safeDocPath}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch blog doc (${safeDocPath}): ${response.status}`
      );
    }
    return response.text();
  });
};
