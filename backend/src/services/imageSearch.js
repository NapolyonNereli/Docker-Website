const { exec } = require("child_process");

exports.imageSearch = async (search) => {
  const command = `sudo docker search ${search}`;
  exec(command, (error, stdout) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stdout);
    }
  });
};
