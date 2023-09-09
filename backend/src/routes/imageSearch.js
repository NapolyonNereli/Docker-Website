const express = require('express');
const router = express.Router();
const searchImageController = require('../controllers/imageSearch');

router.post('/images', searchImageController.imageSearch);
router.post('/download', searchImageController.downloadImage);

module.exports = router;