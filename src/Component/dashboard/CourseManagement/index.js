import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import AddCourse from "./add";
import CourseList from "./list";

function CourseManagement() {
  const [data, setData] = useState([]);
  const [logedinData, setLogedinData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/course-manage/course-show"
      );
      setData(datahere.data);
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

  const fetchData = () => {
    fetchdata();
  };

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="card">
          <AddCourse logedinData={logedinData} />
          <CourseList
            fetchData={fetchData}
            logedinData={logedinData}
            data={data}
          />
        </div>
      </div>
    </Layout>
  );
}

export default CourseManagement;
