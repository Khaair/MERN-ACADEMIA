const express = require("express");
const router = express.Router();
const transactionIdModel = require("../models/transactionId");
const { check, validationResult } = require("express-validator");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.get("/transaction-id-show", async (req, res) => {
  try {
    let data = await transactionIdModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/transaction-id-save",

  [
    check("transactionId")
      .not()
      .isEmpty()
      .withMessage("transactionId is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    try {
      const crudData = new transactionIdModel({
        transactionId: req.body.transactionId,
      });
      const savedData = await crudData.save();
      res.status(200).json({
        data: savedData,
        status: "200",
        message: "TransactionId saved successfully!",
      });
    } catch (err) {
      res.status(500).send({ msg: "Error saving data" });
    }
  }
);

// Get Single information
router.route("/transaction-id-show-single/:id").get(async (req, res, next) => {
  try {
    let data = await transactionIdModel.findById(req.params.id);
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

router.delete("/transaction-id-delete/:id", async (req, res) => {
  try {
    let data = await transactionIdModel.deleteOne({ _id: req.params.id });
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
  "/transaction-id-update/:id",
  [
    check("transactionId")
      .not()
      .isEmpty()
      .withMessage("transactionId is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let updatee = await transactionIdModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          transactionId: req.body.transactionId,
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
