/**
 * Get the correct asset path with basePath prefix for production
 * @param {string} path - The asset path (e.g., '/assets/img/image.jpg')
 * @returns {string} - The path with basePath prefix if in production
 */
export function getAssetPath(path) {
  // In production, basePath is '/new'
  const basePath = process.env.NODE_ENV === 'production' ? '/new' : '';
  
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // If path starts with '/', add basePath prefix
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // Otherwise, return path as is
  return path;
}

/**
 * Get asset path for client-side (browser)
 * This uses window.location to detect if we're in production
 */
export function getAssetPathClient(path) {
  // Check if we're in browser
  if (typeof window === 'undefined') {
    return path;
  }
  
  // Check if current pathname or base href includes '/new' (production basePath)
  const pathname = window.location.pathname;
  const baseHref = document.querySelector('base')?.getAttribute('href') || '';
  const isProduction = pathname.startsWith('/new') || baseHref.includes('/new');
  const basePath = isProduction ? '/new' : '';
  
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // If path already starts with '/new', return as is (already has basePath)
  if (path.startsWith('/new')) {
    return path;
  }
  
  // If path starts with '/', add basePath prefix
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // Otherwise, return path as is
  return path;
}

