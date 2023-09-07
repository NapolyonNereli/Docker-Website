const express = require('express');
const router = express.Router();
const searchImageController = require('../controllers/imageSearch');

router.post('/images', searchImageController.imageSearch);

module.exports = router;