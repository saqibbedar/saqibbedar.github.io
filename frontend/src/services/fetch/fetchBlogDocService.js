import { fetchWithCache } from "./cacheService";

const normalizeDocPath = (docPath = "") =>
  String(docPath || "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^data\/blogs\//i, "");

export const fetchBlogDocService = async (docPath) => {
  const safeDocPath = normalizeDocPath(docPath);

  if (!safeDocPath || safeDocPath.includes("..")) {
    throw new Error("Invalid blog document path");
  }

  return fetchWithCache(`doc:v2:${safeDocPath}`, async () => {
    const response = await fetch(`/data/blogs/${safeDocPath}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch blog doc (${safeDocPath}): ${response.status}`
      );
    }
    return response.text();
  });
};
