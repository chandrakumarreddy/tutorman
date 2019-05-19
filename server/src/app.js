const express = require("express"),
  cors = require("cors"),
  path = require("path"),
  app = express(),
  { connect, generateToken } = require("./config/db"),
  { mailer } = require("./config/mailer"),
  {
    create,
    update,
    getUsers,
    getUser,
    deleteUser
  } = require("./controllers/register"),
  PORT = process.env.PORT || 3000;

connect();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.route("/register").post(create);
app
  .route("/register/:id")
  .patch(update)
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
  return res.redirect("/");
});
app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
