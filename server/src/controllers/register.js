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
        {
          $set: Object.assign({}, req.body, {
            photo: req.files.photo.map(item => item.filename)[0],
            certification: req.files.certification.map(item => item.filename)
          })
        },
        { returnNewDocument: true }
      );
      if (user) {
        return res.status(204).json({
          message: "updated"
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await User.find({});
      return res.status(200).json({
        users: users.map(user =>
          Object.assign({}, users, { user: `/users/${user._id}` })
        )
      });
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({
        id: typeof req.params.id,
        message: "no user found"
      });
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
