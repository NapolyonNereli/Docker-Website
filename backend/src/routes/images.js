const express = require('express');
const router = express.Router();
const getImagesController = require('../controllers/images');

router.get('/get-images', getImagesController.getImages);

module.exports = router;