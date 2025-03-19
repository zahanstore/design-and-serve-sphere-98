
/**
 * This is a simple build script to ensure Vite builds correctly
 * both locally and on Netlify
 */
const { execSync } = require('child_process');

try {
  console.log('Building project with Vite...');
  // Add --debug flag to get more information about the build process
  execSync('npx vite build --debug', { stdio: 'inherit' });
  console.log('Build completed successfully');
  
  // Additional step to update browserslist database (optional but recommended)
  console.log('Updating browserslist database...');
  try {
    execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  } catch (e) {
    console.log('Non-critical: Could not update browserslist database');
  }
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
