const { exec } = require("child_process");

exports.buildImage = async (path, name) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker build --tag ${name} ${path}`;

    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};
