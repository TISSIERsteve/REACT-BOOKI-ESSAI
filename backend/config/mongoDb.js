require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Vous êtes connecter avec succés à MongoDB");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("Deconnecter", () => {
	console.log("MongoDB déconnecter");
});
mongoose.connection.on("Connecter", () => {
	console.log("MongoDB connecter");
});

module.exports = connect;
