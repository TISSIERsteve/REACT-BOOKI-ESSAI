const Hotel = require("../models/HotelsModels");
const fs = require("fs");

// CREATE
exports.createHotel = async (req, res, next) => {
	const info = req.body;
	const newHotel = new Hotel({
		...info,
		imageUrl: `${req.protocol}://${req.get("host")}/images/${
			req.file.filename
		}`,
	});
	try {
		const createHotel = await newHotel.save();
		return res.status(200).json(createHotel);
	} catch (err) {
		return res.status(500).json(err);
	}
};

// GETALL
exports.getAllHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		return res.status(200).json(hotels);
	} catch (err) {
		return res.status(500).json(err);
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
exports.deleteHotel = (req, res, next) => {
	Hotel.findOne({ _id: req.params.id })
		.then(newHotel => {
			const filename = newHotel.imageUrl.split("/images/")[1];
			fs.unlink(`images/${filename}`, error => {
				console.log(error);
				Hotel.deleteOne({ _id: req.params.id })
					.then(() => {
						return res.status(200).json({ Message: "Hôtel Supprimer" });
					})

					.catch(error => {
						return res.status(400).json({ error });
					});
			});
		})
		.catch(err => {
			return res.status(500).json({ err });
		});
};

// UPDATE HOTEL
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

// UPDATE IMAGE HOTEL PAS FINI**************************************
exports.updateImageHotel = async (req, res, next) => {
	Hotel.findOne({ _id: req.params.id })
		.then(newHotel => {
			const filename = newHotel.imageUrl.split("/images/")[1];
			fs.unlink(`images/${filename}`, error => {
				console.log(error);
			});
		})
		.catch(err => {
			return res.status(500).json({ err });
		});
	const hotelObject = req.file
		? {
				imageUrl: `${req.protocol}://${req.get("host")}/images/${
					req.file.filename
				}`,
		  }
		: { ...req.body };

	Hotel.updateOne(
		{ _id: req.params.id },
		{ ...hotelObject, _id: req.params.id },
	)

		.then(() => res.status(200).json({ message: "Hôtel modifié" }))
		.catch(error => res.status(400).json({ error }));
};
