const deployBuild = require('../services/deploy');

exports.buildImage = async (req, res) => {
    const {name, path} = req.body;
    try {
        const buildImage = await deployBuild.buildImage(name, path);
        res.status(200).send(buildImage);
    } catch (error) {
        console.log(error)
    }
}