const express = require("express");
const router = express.Router();
const getImagesController = require("../controllers/images");

router.get("/get-images", getImagesController.getImages);
router.post("/delete-image", getImagesController.deleteImage);
router.post("/run-image", getImagesController.runImage);
module.exports = router;
