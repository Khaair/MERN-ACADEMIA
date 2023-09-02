const express = require("express");
const router = express.Router();
const aboutUsModel = require("../../models/website/school-about-us-model");
const { check, validationResult } = require("express-validator");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/school-about-us-show", async (req, res) => {
  try {
    let data = await aboutUsModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

// Create or update student
router.post(
  "/school-about-us-save",
  [
    check("title").not().isEmpty().withMessage("title is required"),
    check("description").not().isEmpty().withMessage("description is required"),
    // Add more validation checks as needed
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const aboutUsData = {
        title: req.body.title,
        description: req.body.description,
      };

      let savedData;
      if (req.body.id) {
        savedData = await aboutUsModel.findByIdAndUpdate(
          req.body.id,
          aboutUsData,
          { new: true }
        );
      } else {
        const newStudent = new aboutUsModel(aboutUsData);
        savedData = await newStudent.save();
      }

      res.status(200).json({
        data: savedData,
        status: "200",
        message: "About data saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving/updating student data" });
    }
  }
);

module.exports = router;
