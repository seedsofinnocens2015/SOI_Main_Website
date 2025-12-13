/**
 * Get the correct asset path
 * @param {string} path - The asset path (e.g., '/assets/img/image.jpg')
 * @returns {string} - The asset path
 */
export function getAssetPath(path) {
  // Return path as is (no basePath needed for root domain)
  return path;
}

/**
 * Get asset path for client-side (browser)
 * This uses window.location to detect the correct path
 */
export function getAssetPathClient(path) {
  // If path is empty, return as is
  if (!path) {
    return path;
  }
  
  // If path already starts with 'http://' or 'https://', return as is (external URL)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Return path as is (no basePath needed for root domain)
  return path;
}
