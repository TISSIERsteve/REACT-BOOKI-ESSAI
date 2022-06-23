require("dotenv").config({ path: "./config/.env" });

const connect = require("./config/mongoDb");
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
	connect();
	console.log(`Serveur en route sur le ${process.env.PORT}`);
});
