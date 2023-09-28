const { exec } = require("child_process");

exports.superUser = async (pass) => {
  return new Promise((resolve, reject) => {
    const command = `echo ${pass} | sudo -S -v && sudo docker --version`;
    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject(error);

      } else {
        console.log("superUser: ", true);
        resolve(stdout);
      }
    });
  })

};
