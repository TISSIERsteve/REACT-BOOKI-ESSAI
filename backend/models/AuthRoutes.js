// 4. CREATION DU MODEL USER
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			minLength: 3,
			maxLength: 55,
			trim: true,
			uppercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		country: {
			type: String,
			required: true,
			uppercase: true,
		},
		img: {
			type: String,
		},
		city: {
			type: String,
			required: true,
			uppercase: true,
		},
		phone: {
			type: String,
			required: true,
		},
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
