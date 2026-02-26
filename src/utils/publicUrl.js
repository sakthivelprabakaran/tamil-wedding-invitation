/**
 * Helper to get the correct URL for public folder assets.
 * This handles the base path correctly for GitHub Pages deployment.
 * @param {string} path - path relative to /public, starting with /
 * @returns {string} - correct URL with base prepended
 */
export function publicUrl(path) {
    // import.meta.env.BASE_URL is set by Vite (e.g., '/tamil-wedding-invitation/')
    const base = import.meta.env.BASE_URL || '/';
    // Remove leading slash from path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
}
