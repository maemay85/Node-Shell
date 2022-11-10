const fs = require('fs');

<<<<<<< HEAD
module.exports = {
  fsFunc: fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
})
};
=======
console.log(fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    console.log('there is an error')
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    // process.stdout.write('prompt > ');
  }
}));

>>>>>>> 481ae782298385b741c26638c27e91762a6b7446
