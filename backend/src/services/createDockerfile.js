const fs = require('fs').promises;
const path = require('path');


exports.createDockerfile = async (from, workdir, run, copy, expose, cmd) => {
  const dockerfilePath = path.join(__dirname, "../Dockerfile");

  try {
    const content = `
FROM ${from}
WORKDIR ${workdir}
RUN ${run}
COPY ${copy}
EXPOSE ${expose}
CMD ${cmd}
`;

    await fs.writeFile(dockerfilePath, content, "utf-8");

    console.log("Dockerfile successfully updated.");
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

// services/createDockerfile.js

exports.downloadDockerfile = async () => {
  const filePath = path.join(__dirname, '../Dockerfile');

  try {
    const fileStream = await fs.readFile(filePath);
    return fileStream;
  } catch (error) {
    throw error; // Hata fırlatmayı unutmayın
  }
};



// exports.downloadDockerfile = () => {
//   return new Promise((resolve, reject) => {
//     const filePath = path.join(__dirname, "../Dockerfile");


//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error(`read Dockerfile error: `, err);
//         reject({ error: "Error reading Dockerfile" });
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
