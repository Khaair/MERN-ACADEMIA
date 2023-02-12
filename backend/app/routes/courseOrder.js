const express = require("express");
const router = express.Router();
const courseOrderModel = require("../models/crud");
const { check, validationResult } = require("express-validator");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.get("/course-order-show", async (req, res) => {
  try {
    let data = await courseOrderModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ msg: "Error retrieving data" });
  }
});

router.post(
  "/course-order-save",

  [
    check("orderId").not().isEmpty().withMessage("orderId is required"),
    check("courseId").not().isEmpty().withMessage("courseId is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
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
      const crudData = new courseOrderModel({
        orderId: req.body.orderId,
        courseId: req.body.courseId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        transactionId: req.body.transactionId,
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
router.route("/course-order-show-single/:id").get(async (req, res, next) => {
  try {
    let data = await courseOrderModel.findById(req.params.id);
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

router.delete("/course-order-delete/:id", async (req, res) => {
  try {
    let data = await courseOrderModel.deleteOne({ _id: req.params.id });
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
  "/course-order-update/:id",
  [
    check("orderId").not().isEmpty().withMessage("orderId is required"),
    check("courseId").not().isEmpty().withMessage("courseId is required"),
    check("email").not().isEmpty().withMessage("email is required"),
    check("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
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
      let updatee = await courseOrderModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          orderId: req.body.orderId,
          courseId: req.body.courseId,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
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
