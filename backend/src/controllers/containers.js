const containerService = require("../services/containers");


exports.listContainer = async (req, res) => {
    const {veri} = req.body;
    try {
        const listContainer = await containerService.listContainers(veri);
        res.status(200).send(listContainer)
    } catch (error) {
        console.log("error controller container :",error)
    }
}