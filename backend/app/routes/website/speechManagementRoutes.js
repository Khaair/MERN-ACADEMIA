const express = require("express");
const multer = require("multer");
const router = express.Router();
const speechModel = require("../../models/website/speechManagement");
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

router.get("/speech-show", async (req, res) => {
  try {
    let data = await speechModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/speech-save",

  upload.single("file"),
  [
    check("title").not().isEmpty().withMessage("title is required"),
    check("message").not().isEmpty().withMessage("message is required"),
    check("name").not().isEmpty().withMessage("name is required"),
    check("designation").not().isEmpty().withMessage("designation is required"),
    check("position").not().isEmpty().withMessage("position is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new speechModel({
        title: req?.body?.title,
        message: req?.body?.message,
        name: req?.body?.name,
        designation: req?.body?.designation,
        position: req?.body?.position,
        file: req?.file?.filename,
      });
      const savedData = await crudData.save();
      console.log(savedData);
      res.status(200).json({
        data: savedData,
        status: "200",
        message: "Slide saved successfully",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving data" });
    }
  }
);

// Get Single information
router.route("/show-single-speech/:id").get(async (req, res, next) => {
  try {
    let data = await speechModel.findById(req.params.id);
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

router.delete("/speech-delete/:id", async (req, res) => {
  try {
    let data = await speechModel.deleteOne({ _id: req.params.id });
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
  "/speech-update/:id",
  upload.single("file"),
  [
    check("title").not().isEmpty().withMessage("title is required"),
    check("message").not().isEmpty().withMessage("message is required"),
    check("name").not().isEmpty().withMessage("name is required"),
    check("designation").not().isEmpty().withMessage("designation is required"),
    check("position").not().isEmpty().withMessage("position is required"),
  ],
  async (req, res) => {
    console.log(req?.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await speechModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          title: req?.body?.title,
          message: req?.body?.message,
          name: req?.body?.name,
          designation: req?.body?.designation,
          position: req?.body?.position,

          file: req?.file?.filename,
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
