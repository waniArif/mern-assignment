const router = require("express").Router();
let User = require("../models/user");
const multer = require("multer");

// router.route("/").get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json("Error", +err));
// });

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.route("/add").post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({ username });

//   newUser
//     .save()
//     .then(() => res.json("User Added"))
//     .catch(err => res.status(400).json("Error" + err));
// });

router.post("/add", async (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
  try {
    await newUser.save();
    return res.send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// test uploading a picture to the user profile
const upload = multer({
  dest: "avatar",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please uplaod an image file"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/users/me/avatar",
  upload.single("avatar"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
module.exports = router;
