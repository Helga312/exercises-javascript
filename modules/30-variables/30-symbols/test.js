const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
const expected = 'hodor';
assert.strictEqual(content, expected);
