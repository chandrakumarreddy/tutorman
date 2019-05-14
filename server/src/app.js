const express = require("express");
const cors = require("cors");
const app = express(),
	{ connect, generateToken } = require("./config/db"),
	{ mailer } = require("./config/mailer"),
	{ create, update } = require("./controllers/register"),
	PORT = process.env.PORT || 3000;

connect();
app.use(express.json());
app.use(cors());

app.post("/register", create);

app.patch("/register", update);

app.post("/signin", (req, res) => {
	mailer(req.body.recipientMail, generateToken(req.body.recipientMail));
});

app.delete("register", (req, res) => {
	res.send("delete");
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
