const express = require("express");
const router = express();

// router.get("/", (req, res) => {
// 	res.send("authRoutes");
// }); VERIFICATION ROUTES DANS LE LOCALHOST

const authCtrl = require("../controllers/AuthControllers");

router.post("/signup", authCtrl.signup); // Création client
router.post("/login", authCtrl.login); // Connexion client

module.exports = router;
