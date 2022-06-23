const express = require("express");
const router = express();
const authCtrl = require("../controllers/UsersControllers");
const token = require("../middleware/AuthMiddleware");

// UPDATE
router.put("/:id", authCtrl.updateUser); // Changer nom client

// GET ALL USERS
router.get("/", authCtrl.getAllUsers);

// GET ONE USER
router.get("/:id", authCtrl.getOneUser);

// DELETE
router.delete("/:id", authCtrl.deleteUser); // Supprimer client

module.exports = router;
