import { useEffect, useState } from "react";
import Layout from "../layout";
import AddStudent from "./add";
import StudentList from "./list";
function StudentManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const fetchSetData = (e) => {
    setData(e);
  };
  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

  return (
    <Layout>
      <div class="student-management-area">
        <div className="container mt-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                  <AddStudent />
                )}
                <hr className="mt-3" />

                <StudentList
                  fetch={fetchSetData}
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

export default StudentManagement;
