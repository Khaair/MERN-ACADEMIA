import { configureStore } from "@reduxjs/toolkit";
import student from "./slices/studentSlices";
import teacher from "./slices/teacherSlices";

export default configureStore({
  reducer: {
    student,
    teacher,
  },
});
