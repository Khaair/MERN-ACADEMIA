import { useEffect, useState } from "react";
import Layout from "../layout";
import AddClass from "./add";
import ClassList from "./list";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllteachers } from "../../../statement-management/slices/teacherSlices";

function ClassManagement() {
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

  const fetchData = () => {
    fetchdata();
  };
  console.log("Teacher here", list);

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
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <AddClass teacherData={list} fetch={fetchData} />
              )}

              <ClassList
                fetchSetData={fetchSetData}
                fetchdata={fetchdata}
                data={data}
                logedinData={logedinData}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassManagement;
