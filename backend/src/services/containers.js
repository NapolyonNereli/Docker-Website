const {exec} = require('child_process');


exports.listContainers = async (veri) => {
    return new Promise((resolve, reject) => {
        const command = `echo ${veri} | sudo -S docker images`;
        exec(command, (error, stdout) => {
            if(error) {
                reject("Docker container Error: ", error);
            }else {
                console.log(stdout)
                resolve(stdout);
            }
        })
    })
}
