const { exec } = require("child_process");

exports.imageSearch = async (search) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker search ${search}`;
    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject("image: ", error);
      } else {
        resolve(stdout);
      }
    });
  });
};

exports.downloadImage = async (image) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker pull ${image}`;
    exec(command, (error, stdout) => {
      if(error) {
        console.log(error);
        reject("Download: ", error)
      }else {
        resolve(stdout);
      }
    })
  })
}
