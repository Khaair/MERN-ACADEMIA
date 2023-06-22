const express = require("express");
const multer = require("multer");
const router = express.Router();
const crudModel = require("../models/crud");
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
router.get("/student-show", async (req, res) => {
  try {
    let data = await crudModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/save",

  upload.single("file"),
  [
    check("name").not().isEmpty().withMessage("name is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("courseId").not().isEmpty().withMessage("courseId is required"),
    check("studentId").not().isEmpty().withMessage("studentId is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new crudModel({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        courseId: req.body.courseId,
        studentId: req.body.studentId,
        file: req.file.filename,
      });
      const savedData = await crudData.save();
      res.status(200).json({
        data: savedData,
        status: "200",
        message: "Message saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving data" });
    }
  }
);

// Get Single information
router.route("/show-single/:id").get(async (req, res, next) => {
  try {
    let data = await crudModel.findById(req.params.id);
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

router.delete("/delete/:id", async (req, res) => {
  try {
    let data = await crudModel.deleteOne({ _id: req.params.id });
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
  "/update/:id",
  upload.single("file"),
  [
    check("name").not().isEmpty().withMessage("name is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("courseId").not().isEmpty().withMessage("courseId is required"),
    check("studentId").not().isEmpty().withMessage("studentId is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await crudModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          courseId: req.body.courseId,
          studentId: req.body.studentId,
          file: req.file.filename,
        },
        { new: true }
      );
      if (!updatee) {
        return res.status(404).send({ msg: "Data not found" });
      }
      res.send({ info: "updated", up: updatee });
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send({ msg: "Data not found" });
      }
      return res.status(500).send({ msg: "Error updating data" });
    }
  }
);

module.exports = router;
