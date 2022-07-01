const multer = require("multer"); // J'importe multer pour importer des fichiers images

// Je créais un dictionnaire de types mime pour définir le format de l'image
const MIME_TYPES = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
};

// Je créais un objet pour l'enregistrer sur le disque
const storage = multer.diskStorage({
	// Destination d'enregistrement des images
	destination: (req, file, callback) => {
		// Je passe le dossier images à mon backend
		callback(null, "images");
	},
	// Nom de fichier pour éviter les doublons
	filename: (req, file, callback) => {
		// On génère un nouveau nom pour le fichier et j'élimine les espaces dans le nom de fichier
		const name = file.originalname
			.replace(/\.[^/.]+$/, "")
			.split(" ")
			.join("_");
		const extension = MIME_TYPES[file.mimetype];
		// On lui une date pour le rendre le plus unique possible à la milliseconde prés
		callback(null, name + Date.now() + "." + extension);
	},
});

// Methode single pour dire que c'est un fichier uniquecet on dit que c'est une image
module.exports = multer({ storage }).single("image");
