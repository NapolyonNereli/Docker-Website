const searchImageService = require('../services/imageSearch');


exports.imageSearch = async (req, res) => {
    const {search} = req.body;

    try {
        const imageSearch = await searchImageService.imageSearch(search)
        console.log(imageSearch);
        res.send(imageSearch);
    } catch (error) {
        console.log(error);
    }
}

exports.downloadImage = async (req, res) => {
    const {image} = req.body;
    
    try {
        const downloadImage = await searchImageService.downloadImage(image);
        console.log(downloadImage);
        res.send(downloadImage);
    } catch (error) {
        console.log(error);
    }
}