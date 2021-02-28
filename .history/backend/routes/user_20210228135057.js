const router = require("express").Router();
let User = require("../models/user.model");
const multer = require("multer");

// router.route("/").get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json("Error", +err));
// });

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
