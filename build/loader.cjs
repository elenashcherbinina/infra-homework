const yaml = require('yaml');
const fs = require('node:fs');
const path = require('path');

require.extensions['.yml'] = function (module, filename) {
  const content = require('fs').readFileSync(filename, 'utf8');
  const parsedContent = yaml.parse(content);
  module.exports = parsedContent;
};

const myScript = require(path.resolve(__dirname, '../build/test/config.yml'));
console.log(myScript);

module.exports = {
  myScript,
};
