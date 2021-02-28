const router = require("express").Router();
let Friend = require("../models/friend");

router.route("/").get((req, res) => {
  Friend.find()
    .then(friends => res.json(friends))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;

  const newFriend = new Friend({
    username,
    description,
  });

  newFriend
    .save()
    .then(() => res.json("Friend added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Friend.findById(req.params.id)
    .then(friend => res.json(friend))
    .catch(err => res.status(400).json("Error: " + err));
});
// router.get("/:id", (req, res) => {
//   Friend.findById(req.params.id)
//     .then(friend => res.send(friend))
//     .catch(err => res.status(400).send("Error: " + err));
// });

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Friend deleted!"))
    .catch(err => res.status(404).json("eroor: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(friend => {
      friend.username = req.body.username;
      friend.description = req.body.description;

      friend
        .save()
        .then(() => res.json(friend))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
