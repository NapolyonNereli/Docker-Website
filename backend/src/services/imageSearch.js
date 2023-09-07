const { exec } = require("child_process");

exports.imageSearch = async (search) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker search ${search}`;
    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject("Install image: ", error);
      } else {
        resolve(stdout);
      }
    });
  });
};
