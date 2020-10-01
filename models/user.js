const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "The first name is mandatory."],
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	username: {
		type: String,
		required: [true, "The username is mandatory."],
		unique: [true, "The username must be unique."],
		trim: true
	},
	phoneNumber: {
		type: String,
		trim: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('User', UserSchema);