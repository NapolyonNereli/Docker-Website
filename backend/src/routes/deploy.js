const express = require('express');
const router = express.Router();
const buildImage = require('../controllers/deploy');

router.post('/build', buildImage.buildImage);

module.exports = router;