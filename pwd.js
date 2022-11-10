const { cwd } = require('node:process');

module.exports = function(){
  process.stdout.write(cwd())
};
