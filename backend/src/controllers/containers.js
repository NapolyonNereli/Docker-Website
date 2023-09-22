const containerService = require("../services/containers");

exports.listContainer = async (req, res) => {
  try {
    const listContainer = await containerService.listContainers();
    res.status(200).send(listContainer);
  } catch (error) {
    console.log("error controller container :", error);
  }
};

exports.stopContainer = async (req, res) => {
  const { imageID } = req.body;

  try {
    const stopContainer = await containerService.stopContainer(imageID);
    res.status(200).send(stopContainer);
  } catch (error) {
    console.log(error);
    res.status(500).send("error: ", error);
  }
};
