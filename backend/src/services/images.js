const { exec } = require("child_process");
const { stdout } = require("process");

exports.getImages = async () => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker images`;
    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

// Click image button.

exports.createContainer = async (imageID) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker run ${imageID}`;

    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};
