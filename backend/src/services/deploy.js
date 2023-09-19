const { exec } = require("child_process");

exports.buildImage = async (text, name) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker build -t ${name} ${text}`;

    exec(command, (error, stdout) => {
      if (error) {
        console.log("text:", text);
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};
