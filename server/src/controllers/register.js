const User = require("../models/user.model.js");

module.exports = {
	async create(req, res) {
		try {
			const user = await new User(req.body);
			const user = await user.save();
			if (user) {
				return res.redirect(301).send({
					message: "Registration successful"
				});
			}
		} catch (err) {
			return res.status(500).json({
				error: "internal server error"
			});
		}
	},
	async update(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ email: req.body.email },
				{ $set: req.body },
				{ new: true }
			);
			if (user) {
				res.send(user);
			}
		} catch (err) {
			console.log(err);
		}
	}
};
