const express = require("express"),
	cors = require("cors"),
	path = require("path"),
	multer = require("multer"),
	app = express(),
	{ connect, generateToken } = require("./config/db"),
	multerConfig = require("./config/multer"),
	{ mailer } = require("./config/mailer"),
	{
		create,
		update,
		getUsers,
		getUser,
		deleteUser
	} = require("./controllers/register"),
	upload = multerConfig(multer, path),
	PORT = process.env.PORT || 3000;

connect();
app.use(express.static("src/uploads"));
app.use(express.json());
app.use(cors());

app.route("/register").post(create);
app.route("/register/:id")
	.patch(
		upload.fields([
			{
				name: "photo",
				maxCount: 1
			},
			{
				name: "certification",
				maxCount: 3
			}
		]),
		update
	)
	.delete(deleteUser);
app.route("/users").get(getUsers);
app.route("/users/:id").get(getUser);

app.route("/signin").post((req, res) => {
	mailer(req.body.recipientMail, generateToken(req.body.recipientMail)).then(
		() => {
			return res.status(200).json({
				message: "successfully registered"
			});
		}
	);
});

app.get("/confirmation_mail/:id", (req, res) => {
	return res.status(200).json({
		redirect: "/"
	});
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
