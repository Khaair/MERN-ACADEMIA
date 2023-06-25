const express = require("express");
const router = express.Router();
const courseModel = require("../models/courseManagement");
const studentModel = require("../models/studentManagement");
const teacherModel = require("../models/teacherManagement");
const orderModel = require("../models/courseOrder");

router.get("/show", async (req, res) => {
  try {
    let courseData = await courseModel.find();
    let studentData = await studentModel.find();
    let teacherData = await teacherModel.find();
    let orderData = await orderModel.find();

    const result = {
      totalCourse: courseData.length,
      totalStudent: studentData.length,
      totalTeacher: teacherData.length,
      totalOnlineStudent: orderData.length,
    };
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
