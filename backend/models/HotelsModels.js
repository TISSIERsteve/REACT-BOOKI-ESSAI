const mongoose = require("mongoose");

const hotelsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		uppercase: true,
		trim: true,
	},
	city: {
		type: String,
		required: true,
		uppercase: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	prix: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
	},
	rooms: {
		type: [String],
	},
	favoris: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Hotel", hotelsSchema);
