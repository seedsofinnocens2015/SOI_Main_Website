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
  // If path is empty, return as is
  if (!path) {
    return path;
  }
  
  // If path already starts with 'http://' or 'https://', return as is (external URL)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Fix double /new/new/ prefix if present
  if (path.includes('/new/new/')) {
    path = path.replace(/\/new\/new\//g, '/new/');
  }
  
  // Check if we're in browser
  if (typeof window !== 'undefined') {
    // Check if current pathname or base href includes '/new' (production basePath)
    const pathname = window.location.pathname;
    const baseHref = document.querySelector('base')?.getAttribute('href') || '';
    const isProduction = pathname.startsWith('/new') || baseHref.includes('/new');
    const basePath = isProduction ? '/new' : '';
    
    // If path already starts with '/new/', return as is (already has basePath)
    if (path.startsWith('/new/')) {
      return path;
    }
    
    // If path already starts with basePath, return as is
    if (basePath && path.startsWith(basePath)) {
      return path;
    }
    
    // If path starts with '/', add basePath prefix
    if (path.startsWith('/')) {
      return `${basePath}${path}`;
    }
    
    // If path doesn't start with '/', add '/' and basePath prefix
    return `${basePath}/${path}`;
  }
  
  // SSR: Check if we're in production build (for static export)
  // In production, always add /new prefix for assets
  const isProductionBuild = process.env.NODE_ENV === 'production';
  const basePath = isProductionBuild ? '/new' : '';
  
  // If path already starts with '/new/', return as is
  if (path.startsWith('/new/')) {
    return path;
  }
  
  // If path starts with '/', add basePath prefix
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // If path doesn't start with '/', add '/' and basePath prefix
  return `${basePath}/${path}`;
}

