import { useEffect, useState } from "react";
import Layout from "../../layout";
import axios from "axios";
import List from "./list";
import { AppstoreOutlined } from "@ant-design/icons";

function AttendanceList() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/attendance-manage/attendance-show"
      );
      setData(datahere?.data);
    } catch (err) {
      console.log(err, "error");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

  const fetchSetData = (e) => {
    setData(e);
  };

  console.log(data);

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="add-student-wrapper">
                <div className="card-title custom-button">
                  <AppstoreOutlined style={{ fontSize: "20px" }} />
                  <div class="ml-5">Attendance List</div>
                </div>
              </div>
              <hr style={{ height: "0.5px" }} className="mt-2" />
              <List data={data} logedinData={logedinData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AttendanceList;
