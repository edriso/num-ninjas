/**
 * Generate a bcrypt hash for the admin password.
 *
 * Usage (from project root):
 *   node docs/generate-hash.js YOUR_NEW_PASSWORD
 */

const password = process.argv[2];

if (!password) {
  console.error('Usage: node docs/generate-hash.js YOUR_NEW_PASSWORD');
  process.exit(1);
}

const path = require('path');
const webDir = path.resolve(__dirname, '..', 'apps', 'web');
const bcrypt = require(require.resolve('bcryptjs', { paths: [webDir] }));
const hash = bcrypt.hashSync(password, 10);
console.log(hash);
