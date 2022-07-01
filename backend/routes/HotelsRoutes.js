const express = require("express");
const router = express();
const hotelCtrl = require("../controllers/HotelsControllers");
const multer = require("../middleware/Multer");
// const token = require("../middleware/AuthMiddleware");

// CREATE Hôtel
router.post("/", multer, hotelCtrl.createHotel);

// UPDATE Hôtel
router.put("/:id", hotelCtrl.updateHotel);

// DELETE Hôtel
router.delete("/:id", hotelCtrl.deleteHotel);

// GET ALL Hôtel
router.get("/", hotelCtrl.getAllHotels);

// GET ONE Hôtel
router.get("/:id", hotelCtrl.getOneHotel);

module.exports = router;
