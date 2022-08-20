const exec = require('child_process').exec;

export let cmd = (command: any, callback: any) => {

  exec(command, (error: any, stdout: any, stderr: any) => {
    return callback({
      stdout: stdout,
      error: error,
      stderr: stderr
    });
  });
};


