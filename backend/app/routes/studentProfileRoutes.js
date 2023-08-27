const express = require("express");
const router = express.Router();
const studentProfileModel = require("../models/studentProfile");

router.get("/student-profile-show", async (req, res) => {
  try {
    let data = await studentProfileModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post("/student-profile-save", async (req, res) => {
  try {
    const crudData = new studentProfileModel({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      courseId: req.body.courseId,
      studentId: req.body.studentId,
      address: req.body.address,
      gender: req.body.gender,
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
});

//get student information by studentId

router.route("/show-single-student-profile/:studentId").get((req, res) => {
  const studentId = req.params.studentId;

  studentProfileModel.findOne({ studentId }, (error, data) => {
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
router.route("/student-profile-single-show/:id").get(async (req, res, next) => {
  try {
    let data = await studentProfileModel.findById(req.params.id);
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

router.delete("/student-profile-delete/:id", async (req, res) => {
  try {
    let data = await studentProfileModel.deleteOne({ _id: req.params.id });
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

router.post("/student-profile-update/:id", async (req, res) => {
  console.log(req?.body);
  try {
    let updatee = await studentProfileModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        courseId: req.body.courseId,
        studentId: req.body.studentId,
        address: req.body.address,
        gender: req.body.gender,
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
});

module.exports = router;
