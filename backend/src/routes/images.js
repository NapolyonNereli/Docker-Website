const express = require("express");
const router = express.Router();
const getImagesController = require("../controllers/images");

router.get("/get-images", getImagesController.getImages);
router.post("/run-container", getImagesController.runContainer);
router.post("/delete-image", getImagesController.deleteImage);

module.exports = router;
