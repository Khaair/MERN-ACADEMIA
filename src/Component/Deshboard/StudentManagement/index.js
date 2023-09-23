import { useEffect, useState } from "react";
import Layout from "../layout";
import AddStudent from "./add";
import StudentList from "./list";
import StudentReg from "./student-registration";

function StudentManagement() {
  const [logedinData, setLogedinData] = useState([]);

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <>
                  <StudentReg />
                  <AddStudent />
                </>
              )}

              <StudentList logedinData={logedinData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default StudentManagement;
