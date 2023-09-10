const imageService = require("../services/images");

exports.getImages = async (req, res) => {
    try {
        const images = await imageService.getImages();
        res.send(images);
    } catch (error) {
        console.log(error);
        res.status(500).send("error: ", error); 
    }
};
