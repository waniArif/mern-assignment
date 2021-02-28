const router = require("express").Router();
let Friend = require("../models/friend");

router.route("/friends").get((req, res) => {
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

// router.get("/friends", async (req, res) => {
//   // const match = {};
//   const sort = {};
//   // if (req.query.completed) {
//   //   match.completed = req.query.completed === "true";
//   // }

//   if (req.query.sortBy) {
//     const parts = req.query.sortBy.split(":");
//     sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
//   }

//   try {
//     const friends = await Friend.find({ user: req.user._id });
//     console.log(req.user);
//     await req.user
//       .populate({
//         path: "friends",
//         match,
//         options: {
//           limit: parseInt(req.query.limit),
//           skip: parseInt(req.query.skip),
//           sort,
//         },
//       })
//       .execPopulate();

//     res.send(req.user.friends);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
