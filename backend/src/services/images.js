const { exec } = require('child_process');

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
