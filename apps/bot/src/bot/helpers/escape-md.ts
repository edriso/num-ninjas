// Thin re-export so bot code can do `import { escapeMd } from '../helpers/escape-md'`
// without reaching into the database package directly. The implementation
// (and tests) live in @numninjas/database/utils/markdown.
export { escapeMd } from '@numninjas/database';
