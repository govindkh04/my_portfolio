import { copyFile } from 'node:fs/promises';

// Static hosts such as GitHub Pages serve this file for unknown paths. The app
// then renders its own branded not-found screen based on window.location.
await copyFile(new URL('../dist/index.html', import.meta.url), new URL('../dist/404.html', import.meta.url));
