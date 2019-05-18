const User = require("../models/user.model.js");

module.exports = {
  async create(req, res) {
    try {
      const user = await new User(req.body);

      const user1 = await user.save();

      if (user1) {
        return res.status(201).json({
          message: "Registration successful"
        });
      }
    } catch (err) {
      console.log("Error from BE");

      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async update(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
      );

      if (user) {
        return res.send(user);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getUsers(req, res) {
    try {
      const user = await User.find();

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  },

  async getUsersById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  },

  async deleteUser(req, res) {
    try {
      console.log(req.params.id);

      const user = await User.findByIdAndRemove({ _id: req.params.id });

      if (user) {
        return res.send(user);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
