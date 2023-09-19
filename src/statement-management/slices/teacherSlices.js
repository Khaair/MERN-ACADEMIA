import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const teacherSlice = createSlice({
  name: "teacherList",
  initialState: {
    list: [],
  },
  reducers: {
    setteacherList: (state, action) => {
      state.list = action?.payload;
    },
  },
});

export const { setteacherList } = teacherSlice?.actions;

export const fetchAllteachers = () => (dispatch) => {
  axios
    .get("http://localhost:8080/api/teacher-manage/teacher-show")
    .then((response) => {
      dispatch(setteacherList(response?.data));
    })
    .catch((error) => console.log(error));
};

export default teacherSlice.reducer;
