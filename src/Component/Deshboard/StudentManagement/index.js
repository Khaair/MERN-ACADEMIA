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
    <div class="container-fluid">
      <Layout>
        <div class="student-management-area">
          <div className="container mt-4">
            {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
              <AddStudent />
            )}

            <StudentList
              fetch={fetchSetData}
              data={data}
              logedinData={logedinData}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default StudentManagement;
