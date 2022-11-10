//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if(cmd === 'pwd'){
    let pwd = require('./pwd');
  process.stdout.write(pwd)

  } else {

  process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');

});




