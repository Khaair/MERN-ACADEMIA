import React, { useState } from "react";

const CheckboxList = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const studentData = [
    {
      studentRegId: "64fb3864a3feb6ddec811de8",
      studentName: "khairuser",
      _id: "64fda2ec649de2db2407e32a",
    },
    {
      studentRegId: "64fb389ea3feb6ddec811def",
      studentName: "khairuser01",
      _id: "64fda2ec649de2db2407e32b",
    },
    {
      studentRegId: "64fb38b3a3feb6ddec811df6",
      studentName: "khairuser02",
      _id: "64fda2ec649de2db2407e32c",
    },
  ];

  const handleCheckboxChange = (e, studentRegId, studentName) => {
    if (e.target.checked) {
      // If the checkbox is checked, add the student to the selectedStudents array
      setSelectedStudents([...selectedStudents, { studentRegId, studentName }]);
    } else {
      // If the checkbox is unchecked, remove the student from the selectedStudents array
      setSelectedStudents(
        selectedStudents.filter(
          (student) => student.studentRegId !== studentRegId
        )
      );
    }
  };

  console.log("selectedStudents", selectedStudents);

  return (
    <div>
      <h2>Select Students:</h2>
      {studentData.map((student) => (
        <label key={student._id}>
          <input
            type="checkbox"
            value={student.studentRegId}
            checked={selectedStudents.some(
              (s) => s.studentRegId === student.studentRegId
            )}
            onChange={(e) =>
              handleCheckboxChange(e, student.studentRegId, student.studentName)
            }
          />
          {student.studentName}
        </label>
      ))}
      <div>
        <h3>Selected Students:</h3>
        <ul>
          {selectedStudents.map((student, index) => (
            <li key={index}>{student.studentName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxList;
