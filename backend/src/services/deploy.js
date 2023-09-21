const { exec } = require("child_process");

exports.buildImage = async (text, name, port) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker run --name ${name} -d -p ${port} ${text}`;

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
