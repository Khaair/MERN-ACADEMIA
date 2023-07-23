import { useEffect, useState } from "react";
import Layout from "../layout";
import AddTeacher from "./add";
import TeacherList from "./list";
import axios from "axios";

function TeacherManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/teacher-manage/teacher-show"
      );
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchData = () => {
    fetchdata();
  };

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
      <div class="student-management-area">
        <div className="container mt-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                  <AddTeacher fetch={fetchData} />
                )}
                <hr className="mt-3" />

                <TeacherList
                  fetchSetData={fetchSetData}
                  fetchdata={fetchdata}
                  data={data}
                  logedinData={logedinData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TeacherManagement;
