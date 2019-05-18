const express = require("express");

const cors = require("cors");

const app = express(),
  { connect, generateToken } = require("./config/db"),
  { mailer } = require("./config/mailer"),
  {
    create,
    update,
    getUsers,
    getUsersById,
    deleteUser
  } = require("./controllers/register"),
  PORT = process.env.PORT || 3000;

connect();

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post("/register", create);

app.get("/users", getUsers);

app.get("/usersById/:id", getUsersById);

app.patch("/patchregister/:id", update);

app.post("/signin", (req, res) => {
  mailer(req.body.recipientMail, generateToken(req.body.recipientMail)).then(
    () => {
      return res.status(200).json({
        message: "successfully registered"
      });
    }
  );
});

app.delete("/delregister/:id", deleteUser);

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
