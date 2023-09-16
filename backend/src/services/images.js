const { exec } = require("child_process");

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

// Run Images

// exports.createContainer = async (imageID) => {
//   return new Promise((resolve, reject) => {
//     const command = `sudo docker run ${imageID}`;

//     exec(command, (error, stdout) => {
//       if (error) {
//         console.log(error);
//         reject(error);
//       } else {
//         resolve(stdout);
//       }
//     });
//   });
// };

exports.deleteImage = async (imageID) => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker rmi ${imageID}`;

    exec(command, (error, stdout) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log(imageID); // imageID'yi console'da göster
        resolve(stdout);
      }
    });
  });
};
