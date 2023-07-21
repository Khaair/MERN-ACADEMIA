import { useEffect, useState } from "react";
import Layout from "../layout";
import Details from "./details";
import AddStudent from "./add";
import StudentList from "./list";
import { Modal } from "antd";
function StudentManagement() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [getstudentId, setStudentId] = useState();
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

  const handleDetailsOk = () => {
    setIsDetailsModalOpen(false);
  };

  const handleDetailsCancel = () => {
    setIsDetailsModalOpen(false);

    // fetchdata();
  };

  const showDetailsModal = (studentId) => {
    setIsDetailsModalOpen(true);
    setStudentId(studentId);
  };

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

          <Modal
            title="Student Details"
            open={isDetailsModalOpen}
            onOk={handleDetailsOk}
            onCancel={handleDetailsCancel}
            width={900}
            footer={false}
          >
            <Details getstudentId={getstudentId} />
          </Modal>
        </div>
      </Layout>
    </div>
  );
}

export default StudentManagement;
