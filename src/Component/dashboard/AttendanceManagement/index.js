import { useEffect, useState } from "react";
import Layout from "../layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllteachers } from "../../../statement-management/slices/teacherSlices";
import TakeAttendance from "./take-attendance";
import { AppstoreOutlined } from "@ant-design/icons";

function AttendanceManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { list } = useSelector((state) => state?.teacher);
  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/class-manage/class-show"
      );
      setData(datahere?.data);
    } catch (err) {
      console.log(err, "error");
    }
  };
  useEffect(() => {
    fetchdata();
    dispatch(fetchAllteachers());
  }, []);

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

  const fetchSetData = (e) => {
    setData(e);
  };

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="card min-screen-height">
          <div class="add-student-wrapper">
            <div className="card-title custom-button">
              <AppstoreOutlined style={{ fontSize: "20px" }} />
              <div class="ml-5">Take Attendance</div>
            </div>
          </div>
          <hr style={{ height: "0.5px" }} className="mt-2" />

          <TakeAttendance
            fetchSetData={fetchSetData}
            fetchdata={fetchdata}
            data={data}
            logedinData={logedinData}
          />
        </div>
      </div>
    </Layout>
  );
}

export default AttendanceManagement;
