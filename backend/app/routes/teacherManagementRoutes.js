const express = require("express");
const multer = require("multer");
const router = express.Router();
const teacherModel = require("../models/teacherManagement");
const { check, validationResult } = require("express-validator");
const app = express();
//teacherId,name,email,phoneNumber,address,subject,qualifications,designation

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
router.get("/teacher-show", async (req, res) => {
  try {
    let data = await teacherModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/teacher-save",

  upload.single("file"),
  [
    check("name").not().isEmpty().withMessage("name is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("gender").not().isEmpty().withMessage("gender is required"),
    check("teacherId").not().isEmpty().withMessage("teacherId is required"),
    check("address").not().isEmpty().withMessage("address is required"),
    check("subject").not().isEmpty().withMessage("subject is required"),
    check("qualifications")
      .not()
      .isEmpty()
      .withMessage("qualifications is required"),
    check("designation").not().isEmpty().withMessage("designation is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    try {
      const crudData = new teacherModel({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        teacherId: req.body.teacherId,
        address: req.body.address,
        subject: req.body.subject,
        qualifications: req.body.qualifications,
        designation: req.body.designation,
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
router.route("/show-single-teacher/:id").get(async (req, res, next) => {
  try {
    let data = await teacherModel.findById(req.params.id);
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

router.delete("/delete-teacher/:id", async (req, res) => {
  try {
    let data = await teacherModel.deleteOne({ _id: req.params.id });
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
  "/update-teacher/:id",
  upload.single("file"),
  [
    check("name").not().isEmpty().withMessage("name is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
    check("gender").not().isEmpty().withMessage("gender is required"),
    check("teacherId").not().isEmpty().withMessage("teacherId is required"),
    check("address").not().isEmpty().withMessage("address is required"),
    check("subject").not().isEmpty().withMessage("subject is required"),
    check("qualifications")
      .not()
      .isEmpty()
      .withMessage("qualifications is required"),
    check("designation").not().isEmpty().withMessage("designation is required"),
  ],
  async (req, res) => {
    console.log(req?.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await teacherModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          gender: req.body.gender,
          teacherId: req.body.teacherId,
          address: req.body.address,
          subject: req.body.subject,
          qualifications: req.body.qualifications,
          designation: req.body.designation,
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
