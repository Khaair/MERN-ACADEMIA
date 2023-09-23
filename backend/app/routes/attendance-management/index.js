const express = require("express");
const router = express.Router();
const attendanceModel = require("../../models/attendanceManagement");
const { check, validationResult } = require("express-validator");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/attendance-show", async (req, res) => {
  try {
    let data = await attendanceModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/attendance-save",
  [
    check("date").not().isEmpty().withMessage("date is required"),
    check("classId").not().isEmpty().withMessage("classId is required"),
    check("className").not().isEmpty().withMessage("className is required"),
    check("section").not().isEmpty().withMessage("section is required"),
    check("attendedStudentList")
      .not()
      .isEmpty()
      .withMessage("attendedStudentList is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const attendanceData = {
        date: req.body.date,
        classId: req.body.classId,
        className: req.body.className,
        section: req.body.section,
        attendedStudentList: req.body.attendedStudentList,
      };

      let savedData;
      if (req.body.id) {
        savedData = await attendanceModel.findByIdAndUpdate(
          req.body.id,
          attendanceData,
          {
            new: true,
          }
        );
      } else {
        const newAttendance = new attendanceModel(attendanceData);
        savedData = await newAttendance.save();
      }

      res.status(200).json({
        data: savedData,
        status: "200",
        message: "Attendance saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "error saving/updating attendance data" });
    }
  }
);

//get student information by studentId

router.route("/show-single-attendance-class/:classId").get((req, res) => {
  const studentId = req.params.classId;

  attendanceModel.findOne({ studentId }, (error, data) => {
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
router.route("/show-single-attendance/:id").get(async (req, res, next) => {
  try {
    let data = await attendanceModel.findById(req.params.id);
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

module.exports = router;
