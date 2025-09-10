/**
 * Fetches certificates from JSON file
 * @returns {Promise<Array>} Array of certificates
 */
export const fetchCertificatesService = async () => {
  try {
    const response = await fetch("src/assets/json/certificates.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch certificates: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching certificates: ", error);
    return [];
  }
};
