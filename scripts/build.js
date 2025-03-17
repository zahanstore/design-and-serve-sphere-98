
/**
 * This is a simple build script to ensure Vite builds correctly
 * both locally and on Netlify
 */
const { execSync } = require('child_process');

try {
  console.log('Building project with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
