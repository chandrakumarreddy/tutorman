const mongoose = require("mongoose"),
	jwt = require("jsonwebtoken"),
	config = require("./config");

module.exports = {
	connect() {
		mongoose.set("useFindAndModify", false);
		mongoose
			.connect("mongodb://localhost:27017/tutorman", {
				useNewUrlParser: true
			})
			.then(() => console.log("connected to db"))
			.catch("failed to connect to db");
	},
	generateToken(mail) {
		return jwt.sign({ email: mail }, config.authentication.JWT_SECRET, {
			expiresIn: 60 * 60
		});
	}
};
