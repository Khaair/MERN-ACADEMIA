const express = require("express");
const router = express.Router();
const classModel = require("../../models/class-management");
const { check, validationResult } = require("express-validator");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/class-show", async (req, res) => {
  try {
    let data = await classModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/class-save",
  [
    check("className").not().isEmpty().withMessage("className is required"),
    check("section").not().isEmpty().withMessage("section is required"),
    check("teacherName").not().isEmpty().withMessage("teacherName is required"),
    check("subjectName").not().isEmpty().withMessage("subjectName is required"),
    check("studentList").not().isEmpty().withMessage("studentList is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const classData = {
        className: req.body.className,
        section: req.body.section,
        teacherName: req.body.teacherName,
        subjectName: req.body.subjectName,
        studentList: req.body.studentList,
      };

      let savedData;
      if (req.body.id) {
        savedData = await classModel.findByIdAndUpdate(req.body.id, classData, {
          new: true,
        });
      } else {
        const newStudent = new classModel(classData);
        savedData = await newStudent.save();
      }

      res.status(200).json({
        data: savedData,
        status: "200",
        message: "mission and vission saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "error saving/updating student data" });
    }
  }
);

// Get Single information
router.route("/show-single-class/:id").get(async (req, res, next) => {
  try {
    let data = await classModel.findById(req.params.id);
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
