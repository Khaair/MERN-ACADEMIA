const express = require("express");
const multer = require("multer");
const router = express.Router();
const noticesModel = require("../../models/website/noticesManagement");
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
router.get("/notices-show", async (req, res) => {
  try {
    let data = await noticesModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/notices-save",

  upload.single("file"),
  [
    check("date").not().isEmpty().withMessage("date is required"),
    check("noticesTitle")
      .not()
      .isEmpty()
      .withMessage("noticesTitle is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const crudData = new noticesModel({
        date: req.body.date,
        noticesTitle: req.body.noticesTitle,
        file: req.file.filename,
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
router.route("/show-single-notices/:id").get(async (req, res, next) => {
  try {
    let data = await noticesModel.findById(req.params.id);
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

router.delete("/notices-delete/:id", async (req, res) => {
  try {
    let data = await noticesModel.deleteOne({ _id: req.params.id });
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
  "/notices-update/:id",
  upload.single("file"),
  [
    check("date").not().isEmpty().withMessage("date is required"),
    check("noticesTitle")
      .not()
      .isEmpty()
      .withMessage("noticesTitle is required"),
  ],
  async (req, res) => {
    console.log(req?.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await noticesModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          date: req.body.date,
          noticesTitle: req.body.noticesTitle,
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
