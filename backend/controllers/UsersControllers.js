const User = require("../models/AuthRoutes");

// UPDATE
exports.updateUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		return res.status(200).json(updatedUser);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// GETALL
exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		return res.status(200).json(users);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// GETONE
exports.getOneUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// DELETE
exports.deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		return res.status(200).json("Client supprimer");
	} catch (err) {
		return res.status(500).json(err);
	}
};
