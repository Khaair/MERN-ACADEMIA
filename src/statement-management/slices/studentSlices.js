import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const studentSlice = createSlice({
  name: "studentList",
  initialState: {
    list: [],
  },
  reducers: {
    // action
    setstudentList: (state, action) => {
      state.list = action?.payload;
    },
  },
});

export const { setstudentList } = studentSlice?.actions;

export const fetchAllStudents = () => (dispatch) => {
  axios
    .get("http://localhost:8080/api/student-manage/student-show")
    .then((response) => {
      dispatch(setstudentList(response?.data));
    })
    .catch((error) => console.log(error));
};

export default studentSlice.reducer;
