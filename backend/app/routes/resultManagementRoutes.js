const express = require("express");
const router = express.Router();
const resultModel = require("../models/resultManagement");

router.get("/result-show", async (req, res) => {
  let data = await resultModel.find();
  console.log(data);
  res.send(data);
});

router.post("/result-save", async (req, res) => {
  console.log(req.body);

  const resultData = new resultModel({
    studentName: req.body.studentName,
    rollNumber: req.body.rollNumber,
    examName: req.body.examName,
    passingYear: req.body.passingYear,
    subjectAndMarks: req.body.subjectAndMarks,
  });

  try {
    const savedData = await resultData.save();
    res.json(savedData);
  } catch (err) {
    res.send("Error");
  }
});

// Get Single information
// router.route("/show-single-result/:id").get((req, res) => {
//   resultModel.findById(req.params.id, (error, data) => {
//     if (error) {
//       return error;
//     } else {
//       function processSubjectAndMarks(data) {
//         const processedData = { ...data };
//         processedData.subjectAndMarks = data.subjectAndMarks.map((item) => {
//           const [subject, marks] = item.split("-");
//           return { [subject]: marks };
//         });
//         return processedData;
//       }
//       const processedData = processSubjectAndMarks(data);
//       let marksArray = processedData?.subjectAndMarks?.map(
//         (item, indexedDB) => {
//           const subject = Object.keys(item)[0];
//           const marks = item[subject];
//           let gradePoint;
//           if (marks >= 80) {
//             gradePoint = 5.0;
//           } else if (marks >= 70) {
//             gradePoint = 4.0;
//           } else if (marks >= 60) {
//             gradePoint = 3.5;
//           } else if (marks >= 50) {
//             gradePoint = 3.0;
//           } else if (marks >= 40) {
//             gradePoint = 2.0;
//           } else if (marks >= 33) {
//             gradePoint = 1.0;
//           } else {
//             gradePoint = 0.0;
//           }
//           return Number(gradePoint);
//         }
//       );
//       let sum = 0;
//       for (let i = 0; i < marksArray.length; i++) {
//         sum += marksArray[i];
//       }
//       let gpa = sum / marksArray.length;
//       processedData &&
//         res.json({
//           success: true,
//           details: {
//             studentName: data?.studentName,
//             rollNumber: data?.rollNumber,
//             examName: data?.examName,
//             passingYear: data?.passingYear,
//           },
//           subjectAndMarks: processedData?.subjectAndMarks,
//           gpa: gpa.toFixed(2),
//         });
//     }
//   });
// });
router.route("/show-single-result/:id").get(async (req, res) => {
  try {
    const data = await resultModel.findById(req.params.id);

    if (!data) {
      return res.json({ success: false, message: "Result not found" });
    }

    const processedData = processSubjectAndMarks(data);
    const gpa = calculateGPA(processedData.subjectAndMarks);

    const result = {
      success: true,
      details: {
        studentName: data.studentName,
        rollNumber: data.rollNumber,
        examName: data.examName,
        passingYear: data.passingYear,
      },
      subjectAndMarks: processedData.subjectAndMarks,
      gpa: gpa.toFixed(2),
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "An error occurred" });
  }
});

function processSubjectAndMarks(data) {
  return {
    subjectAndMarks: data.subjectAndMarks.map((item) => {
      const [subject, marks] = item.split("-");
      return { [subject]: parseInt(marks) };
    }),
  };
}

function calculateGPA(subjectAndMarks) {
  const totalSubjects = subjectAndMarks.length;
  let totalGradePoints = 0;

  for (const item of subjectAndMarks) {
    const marks = Object.values(item)[0];
    const gradePoint = calculateGradePoint(marks);
    totalGradePoints += gradePoint;
  }

  return totalGradePoints / totalSubjects;
}

function calculateGradePoint(marks) {
  if (marks >= 80) {
    return 5.0;
  } else if (marks >= 70) {
    return 4.0;
  } else if (marks >= 60) {
    return 3.5;
  } else if (marks >= 50) {
    return 3.0;
  } else if (marks >= 40) {
    return 2.0;
  } else if (marks >= 33) {
    return 1.0;
  } else {
    return 0.0;
  }
}

router.delete("/result-delete/:id", async (req, res) => {
  let data = await resultModel.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted", data: data });
});

router.post("/result-update/:id", async (req, res) => {
  console.log(req.params.id, req.body);

  try {
    let updatee = await resultModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        studentName: req.body.studentName,
        rollNumber: req.body.rollNumber,
        examName: req.body.examName,
        passingYear: req.body.passingYear,
        subjectAndMarks: req.body.subjectAndMarks,
      }
    );

    res.send({ info: "updated", up: updatee });
  } catch (err) {
    res.send({ info: "error ocuured" });
  }
});

module.exports = router;
