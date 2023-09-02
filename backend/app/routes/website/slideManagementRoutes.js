const express = require("express");
const multer = require("multer");
const router = express.Router();
const slideModel = require("../../models/website/slideManagement");
const { check, validationResult } = require("express-validator");
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.get("/slide-show", async (req, res) => {
  try {
    let data = await slideModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/slide-save",

  upload.single("file"),
  [
    check("topTitle").not().isEmpty().withMessage("top title is required"),
    check("title").not().isEmpty().withMessage("title is required"),
    check("subTitle").not().isEmpty().withMessage("sub title is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new slideModel({
        topTitle: req.body.topTitle,
        title: req.body.title,
        subTitle: req.body.subTitle,
        file: req.file.filename,
      });
      const savedData = await crudData.save();
      console.log(savedData);
      res.status(200).json({
        data: savedData,
        status: "200",
        message: "Slide saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving data" });
    }
  }
);

//get student information by studentId

router.route("/show-single-slide/:studentId").get((req, res) => {
  const studentId = req.params.studentId;

  slideModel.findOne({ studentId }, (error, data) => {
    if (error) {
      return res.status(500).json({ error: "Error finding student profile." });
    } else {
      if (!data) {
        return res.status(404).json({ message: "Student profile not found." });
      }

      res.json(data);
    }
  });
});

// Get Single information
router.route("/show-single-slide/:id").get(async (req, res, next) => {
  try {
    let data = await slideModel.findById(req.params.id);
    if (!data) {
      return res.status(404).send({ msg: "Data not found" });
    }
    res.json(data);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({ msg: "Data not found" });
    }
    return res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.delete("/slide-delete/:id", async (req, res) => {
  try {
    let data = await slideModel.deleteOne({ _id: req.params.id });
    if (!data) {
      return res.status(404).send({ msg: "Data not found" });
    }
    res.send({ msg: "deleted", data: data });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({ msg: "Data not found" });
    }
    return res.status(500).send({ msg: "Error deleting data" });
  }
});

router.post(
  "/slide-update/:id",
  upload.single("file"),
  [
    check("topTitle").not().isEmpty().withMessage("top title is required"),
    check("title").not().isEmpty().withMessage("title is required"),
    check("subTitle").not().isEmpty().withMessage("sub title is required"),
  ],
  async (req, res) => {
    console.log(req?.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await slideModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          topTitle: req.body.topTitle,
          title: req.body.title,
          subTitle: req.body.subTitle,

          file: req.file.filename,
        },
        { new: true }
      );
      if (!updatee) {
        return res.status(404).send({ msg: "Data not found" });
      }
      console.log("updatee", updatee);

      res.send({ status: 201, up: updatee });
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send({ msg: "Data not found" });
      }
      return res.status(500).send({ msg: "Error updating data" });
    }
  }
);

module.exports = router;
