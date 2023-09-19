const deployBuild = require("../services/deploy");

exports.buildImage = async (req, res) => {
  const { text, name } = req.body;
  try {
    const buildImage = await deployBuild.buildImage(text, name);
    res.status(200).send(buildImage);
  } catch (error) {
    console.log(error);
  }
};
