const fs = require('fs');

module.exports = function(){fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write('\n\n');
    process.stdout.write(files.join('\n'));
    process.stdout.write('\n\nprompt > ');
  }
})
};

