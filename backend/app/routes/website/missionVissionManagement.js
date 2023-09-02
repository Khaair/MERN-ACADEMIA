const express = require("express");
const router = express.Router();
const missionVissionModel = require("../../models/website/missionVissionManagement");
const { check, validationResult } = require("express-validator");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/mission-vission-show", async (req, res) => {
  try {
    let data = await missionVissionModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/mission-vission-save",
  [
    check("mission").not().isEmpty().withMessage("mission is required"),
    check("vission").not().isEmpty().withMessage("vission is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const missionVissionData = {
        mission: req.body.mission,
        vission: req.body.vission,
      };

      let savedData;
      if (req.body.id) {
        savedData = await missionVissionModel.findByIdAndUpdate(
          req.body.id,
          missionVissionData,
          { new: true }
        );
      } else {
        const newStudent = new missionVissionModel(missionVissionData);
        savedData = await newStudent.save();
      }

      res.status(200).json({
        data: savedData,
        status: "200",
        message: "mission and vission saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving/updating student data" });
    }
  }
);

module.exports = router;
