const exec = require('child_process').exec;
const exec_file = require('child_process').execFile;

export let cmd = (command: any, callback: any) => {

  exec(command, (error: any, stdout: any, stderr: any) => {
    return callback({
      stdout: stdout,
      error: error,
      stderr: stderr
    });
  });
};


export let bat = (file: any, callback: any) => {

  exec_file(file, null,{cwd:'D:/workspace/lateject'},(error: any, stdout: any, stderr: any) => {
    return callback({
      stdout: stdout,
      error: error,
      stderr: stderr
    });
  });
};
