const express = require("express");
const multer = require("multer");
const router = express.Router();
const studentManageModel = require("../models/student.model");
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
router.get("/student-list", async (req, res) => {
  try {
    let data = await studentManageModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/add-student",

  upload.single("file"),
  [
    check("fullname").not().isEmpty().withMessage("fullname is required"),
    check("dob").not().isEmpty().withMessage("dob is required"),
    check("religion").not().isEmpty().withMessage("religion is required"),
    check("section").not().isEmpty().withMessage("section is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("admissionId").not().isEmpty().withMessage("admissionId is required"),
    check("gender").not().isEmpty().withMessage("gender is required"),
    check("bloodGroup").not().isEmpty().withMessage("bloodGroup is required"),
    check("classNo").not().isEmpty().withMessage("classNo is required"),
    check("phone").not().isEmpty().withMessage("phone is required"),
    check("file").not().isEmpty().withMessage("file is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new studentManageModel({
        fullname: req.body.fullname,
        dob: req.body.dob,
        religion: req.body.religion,
        section: req.body.section,
        roll: req.body.roll,
        email: req.body.email,
        admissionId: req.body.admissionId,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        classNo: req.body.classNo,
        phone: req.body.phone,
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
router.route("/student-single/:id").get(async (req, res, next) => {
  try {
    let data = await studentManageModel.findById(req.params.id);
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
    let data = await studentManageModel.deleteOne({ _id: req.params.id });
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
  "/student-update/:id",
  [
    check("fullname").not().isEmpty().withMessage("Title is required"),
    check("author").not().isEmpty().withMessage("Author is required"),
    check("body").not().isEmpty().withMessage("Body is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await studentManageModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          fullname: req.body.fullname,
          dob: req.body.dob,
          religion: req.body.religion,
          section: req.body.section,
          roll: req.body.roll,
          email: req.body.email,
          admissionId: req.body.admissionId,
          gender: req.body.gender,
          bloodGroup: req.body.bloodGroup,
          classNo: req.body.classNo,
          phone: req.body.phone,
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

// fullname
// dob
// religion
// section
// roll
// email
// admissionId
// gender
// bloodGroup
// classNo
// phone
// file
