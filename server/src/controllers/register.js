const User = require("../models/user.model.js");

module.exports = {
  async create(req, res) {
    try {
      const user = await new User(req.body);
      const userData = await user.save();
      if (userData) {
        return res.status(201).json({
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
        { _id: req.params.id },
        { $set: req.body }
      );

      if (user) {
        return res.status(204);
      }
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
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

  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndRemove({ _id: req.params.id });
      if (user) {
        return res.status(204);
      }
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  }
};
