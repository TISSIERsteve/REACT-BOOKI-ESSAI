const User = require("../models/AuthRoutes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// INSCRIPTION
exports.signup = async (req, res) => {
	bcrypt
		.hash(req.body.password, 10)
		.then(hash => {
			const user = new User({
				name: req.body.nom,
				email: req.body.email,
				city: req.body.ville,
				phone: req.body.phone,
				country: req.body.country,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201).json({ msg: "Utilisateur crée" }))
				.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

// CONNEXION
exports.login = (req, res) => {
	User.findOne({
		email: req.body.email,
	})
		.then(user => {
			if (!user) {
				return res.status(401).json({ Message: "Utilsateur non trouvé !" });
			}

			bcrypt.compare(req.body.password, user.password).then(valid => {
				if (!valid) {
					return res.status(401).json({ Message: "Mot de passe incorrect !" });
				}
				if (valid) {
					const token = jwt.sign(
						{
							expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
							userId: user._id,
						},
						process.env.JWT_SECRET,
					);

					return res.status(200).json({
						Message: "Succés de connexion au compte",
						token,
						identifiant: user._id,
						nom: user.name,
						email: user.email,
					});
				}
			});
		})
		.catch(error => {
			return res.status(500).json({ msg: error });
		});
};
