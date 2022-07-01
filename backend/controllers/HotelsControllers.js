const Hotel = require("../models/HotelsModels");

// CREATE
exports.createHotel = async (req, res, next) => {
	console.log(req.body);
	const info = req.body;
	const newHotel = new Hotel({
		...info,
	});
	try {
		const createHotel = await newHotel.save();
		res.status(200).json(createHotel);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
exports.updateHotel = async (req, res, next) => {
	try {
		const updateHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updateHotel);
	} catch (err) {
		res.status(500).json(err);
	}
};

// GETALL
exports.getAllHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find(req.params.id);
		res.status(200).json(hotels);
	} catch (err) {
		res.status(500).json(err);
	}
};

// GETONE
exports.getOneHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
};

// DELETE
exports.deleteHotel = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json({ Message: "Hôtel Supprimer" });
	} catch (err) {
		res.status(500).json(err);
	}
};
