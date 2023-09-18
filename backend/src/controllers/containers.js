const containerService = require("../services/containers");

exports.listContainer = async (req, res) => {
  try {
    const listContainer = await containerService.listContainers();
    res.status(200).send(listContainer);
  } catch (error) {
    console.log("error controller container :", error);
  }
};
