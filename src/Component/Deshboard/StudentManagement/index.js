import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import Details from "./details";
import AddStudent from "./add";
import StudentList from "./list";
import { Modal } from "antd";
function StudentManagement() {
  const [data, setData] = useState([]);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [getstudentId, setStudentId] = useState();
  const [logedinData, setLogedinData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/student-manage/student-show"
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

    fetchdata();
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
              fetchData={fetchData}
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
