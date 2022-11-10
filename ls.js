const fs = require('fs');

console.log(fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    console.log('there is an error')
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    // process.stdout.write('prompt > ');
  }
}));

