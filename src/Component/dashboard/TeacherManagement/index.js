import { useEffect, useState } from "react";
import Layout from "../layout";
import AddTeacher from "./add";
import TeacherList from "./list";
import TeacherReg from "./teacher-registration";

function TeacherManagement() {
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
                  <TeacherReg />
                  <AddTeacher />
                </>
              )}

              <TeacherList logedinData={logedinData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TeacherManagement;
