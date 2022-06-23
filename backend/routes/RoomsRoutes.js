const express = require("express");
const router = express();
const roomCtrl = require("../controllers/RoomsControllers");
const token = require("../middleware/AuthMiddleware");

// CREATE
router.post("/", roomCtrl.createRoom);

// UPDATE
router.put("/:id", roomCtrl.updateRoom);

// GET ALL Rooms
router.get("/", roomCtrl.getAllRooms);

// GET ONE Room
router.get("/:id", roomCtrl.getOneRoom);

// DELETE
router.delete("/:id", roomCtrl.deleteRoom);

module.exports = router;
