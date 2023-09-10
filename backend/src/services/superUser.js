const {exec} = require('child_process');


exports.superUser = async (pass) => {
    const command = `echo ${pass} | sudo -S docker images`;

    exec(command, (error, stdout) => {
        if(error) {
            console.log(error);
        }else {
            console.log("superUser: ", true);
            return stdout
        }
    })
}