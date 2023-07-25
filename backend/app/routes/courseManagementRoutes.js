const express = require("express");
const multer = require("multer");
const router = express.Router();
const courseManagementModel = require("../models/courseManagement");
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
router.get("/course-show", async (req, res) => {
  try {
    let data = await courseManagementModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/course-save",
  upload.single("file"),
  [
    check("courseTitle").not().isEmpty().withMessage("courseTitle is required"),
    check("courseSubTitle")
      .not()
      .isEmpty()
      .withMessage("courseSubTitle is required"),
    check("price").not().isEmpty().withMessage("price is required"),

    check("description").not().isEmpty().withMessage("description is required"),
    check("instructorName")
      .not()
      .isEmpty()
      .withMessage("instructorName is required"),
    check("instructorDesignation")
      .not()
      .isEmpty()
      .withMessage("instructorDesignation is required"),
    check("learnFromCourse")
      .not()
      .isEmpty()
      .withMessage("learnFromCourse is required"),
    check("courseContent")
      .not()
      .isEmpty()
      .withMessage("courseContent is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req?.body);
    console.log(req?.file?.filename);

    try {
      const crudData = new courseManagementModel({
        courseTitle: req.body.courseTitle,
        courseSubTitle: req.body.courseSubTitle,
        price: req.body.price,
        description: req.body.description,
        instructorName: req.body.instructorName,
        instructorDesignation: req.body.instructorDesignation,
        learnFromCourse: req.body.learnFromCourse,
        courseContent: req.body.courseContent,
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
router.route("/show-single-course/:id").get(async (req, res, next) => {
  try {
    let data = await courseManagementModel.findById(req.params.id);
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

router.delete("/delete-course/:id", async (req, res) => {
  console.log(" req.params.id ", req.params.id);

  try {
    let data = await courseManagementModel.deleteOne({ _id: req.params.id });
    console.log(data);

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
  "/course-update/:id",
  upload.single("file"),
  [
    check("courseTitle").not().isEmpty().withMessage("courseTitle is required"),
    check("courseSubTitle")
      .not()
      .isEmpty()
      .withMessage("courseSubTitle is required"),
    check("price").not().isEmpty().withMessage("price is required"),
    check("description").not().isEmpty().withMessage("description is required"),
    check("instructorName")
      .not()
      .isEmpty()
      .withMessage("instructorName is required"),
    check("instructorDesignation")
      .not()
      .isEmpty()
      .withMessage("instructorDesignation is required"),
    check("learnFromCourse")
      .not()
      .isEmpty()
      .withMessage("learnFromCourse is required"),
    check("courseContent")
      .not()
      .isEmpty()
      .withMessage("courseContent is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await courseManagementModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          courseTitle: req.body.courseTitle,
          courseSubTitle: req.body.courseSubTitle,
          price: req.body.price,
          description: req.body.description,
          instructorName: req.body.instructorName,
          instructorDesignation: req.body.instructorDesignation,
          learnFromCourse: req.body.learnFromCourse,
          courseContent: req.body.courseContent,
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
