/**
 * Base path for the application (should match next.config.mjs)
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/new' : '');

/**
 * Get the correct asset path
 * @param {string} path - The asset path (e.g., '/assets/img/image.jpg')
 * @returns {string} - The asset path with basePath prefix
 */
export function getAssetPath(path) {
  if (!path) {
    return path;
  }
  
  // If path already starts with 'http://' or 'https://', return as is (external URL)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // If path already starts with basePath, return as is
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  
  // Add basePath prefix if it's a relative path starting with '/'
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`;
  }
  
  return path;
}

/**
 * Get asset path for client-side (browser)
 * @param {string} path - The asset path (e.g., '/assets/img/image.jpg')
 * @returns {string} - The asset path with basePath prefix
 */
export function getAssetPathClient(path) {
  if (!path) {
    return path;
  }
  
  // If path already starts with 'http://' or 'https://', return as is (external URL)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // If path already starts with basePath, return as is
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  
  // Add basePath prefix if it's a relative path starting with '/'
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`;
  }
  
  return path;
}
