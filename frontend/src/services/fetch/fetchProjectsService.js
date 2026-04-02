/**
 * Fetches projects from JSON file
 * @returns {Promise<Object>} Array of projects
 */
export const fetchProjectsService = async () => {
    try {
        const response = await fetch("src/assets/json/projects.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching projects: ", error);
        return [];
    }
}