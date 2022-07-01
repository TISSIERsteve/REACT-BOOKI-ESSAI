const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/AuthRoutes");
const hotelRoutes = require("./routes/HotelsRoutes");
const roomsRoutes = require("./routes/RoomsRoutes");
const usersRoutes = require("./routes/UsersRoutes");

// Middleware
app.use("/api/auth", authRoutes); // Inscription / Connexion
app.use("/api/hotels", hotelRoutes); // CRUD Hôtels
app.use("/api/users", usersRoutes); // Modification(s) User(s)
app.use("/api/rooms", roomsRoutes); // CRUD Rooms

// Middleware qui permet de charger les fichiers qui sont dans le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
