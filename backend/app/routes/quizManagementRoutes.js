const express = require("express");
const router = express.Router();
const quizModel = require("../models/quizManagement");

router.get("/quiz-show", async (req, res) => {
  let data = await quizModel.find();
  res.send(data);
});

router.post("/quiz-save", async (req, res) => {
  const tt = new quizModel({
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer,
  });

  try {
    const a1 = await tt.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

// Get Single information
router.route("/show-single-quiz/:id").get((req, res) => {
  quizModel.findById(req.params.id, (error, data) => {
    if (error) {
      return error;
    } else {
      res.json(data);
    }
  });
});

router.delete("/quiz-delete/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await quizModel.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted", data: data });
});

router.post("/quiz-update/:id", async (req, res) => {
  console.log(req.params.id, req.body);

  try {
    let updatee = await quizModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer,
      }
    );

    res.send({ info: "updated", up: updatee });
  } catch (err) {
    res.send({ info: "error ocuured" });
  }
});

module.exports = router;
