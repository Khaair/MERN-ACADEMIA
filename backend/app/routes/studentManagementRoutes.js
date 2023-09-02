const express = require("express");
const multer = require("multer");
const router = express.Router();
const studentModel = require("../models/studentManagement");
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
    let data = await studentModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/student-save",

  upload.single("file"),
  [
    check("fullName").not().isEmpty().withMessage("fullName is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("password").not().isEmpty().withMessage("password is required"),
    check("studentRegId")
      .not()
      .isEmpty()
      .withMessage("studentRegId is required"),

    check("dob").not().isEmpty().withMessage("dob is required"),
    check("address").not().isEmpty().withMessage("address is required"),
    check("gender").not().isEmpty().withMessage("gender is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new studentModel({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        studentRegId: req.body.studentRegId,
        dob: req.body.dob,
        courseId: req.body.courseId,
        studentId: req.body.studentId,
        address: req.body.address,
        gender: req.body.gender,

        file: req.file.filename,
      });
      const savedData = await crudData.save();
      console.log(savedData);
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

//get student information by studentId

router.route("/show-single-student-profile/:studentRegId").get((req, res) => {
  const studentRegId = req.params.studentRegId;

  studentModel.findOne({ studentRegId }, (error, data) => {
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
router.route("/show-single-student/:id").get(async (req, res, next) => {
  try {
    let data = await studentModel.findById(req.params.id);
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

router.delete("/student-delete/:id", async (req, res) => {
  try {
    let data = await studentModel.deleteOne({ _id: req.params.id });
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
  "/update-student/:id",
  upload.single("file"),
  [
    check("fullName").not().isEmpty().withMessage("fullName is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("password").not().isEmpty().withMessage("password is required"),
    check("studentRegId")
      .not()
      .isEmpty()
      .withMessage("studentRegId is required"),

    check("dob").not().isEmpty().withMessage("dob is required"),

    check("address").not().isEmpty().withMessage("address is required"),
    check("gender").not().isEmpty().withMessage("gender is required"),
  ],
  async (req, res) => {
    console.log(req?.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await studentModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber,
          studentRegId: req.body.studentRegId,
          dob: req.body.dob,
          courseId: req.body.courseId,
          studentId: req.body.studentId,
          address: req.body.address,
          gender: req.body.gender,

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
