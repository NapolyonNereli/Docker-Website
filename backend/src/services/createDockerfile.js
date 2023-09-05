const fs = require('fs');
// working post method
exports.createDockerfile = async (from, workdir, copy, run, cmd, expose)  => {
    const text = `
        ${from}
        ${workdir}
        ${copy}
        ${run}
        ${cmd}
        ${expose}
    `
    try {
        fs.writeFile('Dockerfile.txt', text, (error) => {
            if(error) {
                console.log(error);
                res.status(500).send("Not created file");
            } else {
                console.log("Dosya oluşturuldu");
                res.status(200).send("Dosya oluşturuldu ve yazıldı");
            }
        })
    } catch (error) {
        console.log("createDockerfile service Error: ", error)
    }
}



exports.downloadDockerfile = (res) => {
    try {
      const fileName = 'Dockerfile.txt';
  
      // Check File
      fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('File not found:', err);
          res.status(404).send('File not found');
        } else {
          // Download file
          res.download(fileName, (err) => {
            if (err) {
              console.error(err);
              res.status(500).send('Download error', err);
            } else {
              console.log('Download successful');
            }
          });
        }
      });
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).send('Download error');
    }
  };