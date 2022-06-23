const Room = require("../models/RoomsModels");

// CREATE
exports.createRoom = async (req, res, next) => {
	const newRoom = new Room(req.body);

	try {
		const savedRoom = await newRoom.save();
		res.status(200).json(newRoom);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
exports.updateRoom = async (req, res, next) => {
	try {
		const updateRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updateRoom);
	} catch (err) {
		res.status(500).json(err);
	}
};

// GETALL
exports.getAllRooms = async (req, res, next) => {
	try {
		const rooms = await Room.find(req.params.id);
		res.status(200).json(rooms);
	} catch (err) {
		res.status(500).json(err);
	}
};

// GETONE
exports.getOneRoom = async (req, res, next) => {
	try {
		const room = await Room.findById(req.params.id);
		res.status(200).json(room);
	} catch (err) {
		res.status(500).json(err);
	}
};

// DELETE
exports.deleteRoom = async (req, res, next) => {
	try {
		await Room.findByIdAndDelete(req.params.id);
		res.status(200).json({ Message: "Chanbre Supprimer" });
	} catch (err) {
		res.status(500).json(err);
	}
};
