import { useEffect, useState } from "react";
import Layout from "../../layout";
import axios from "axios";
import AddSlide from "./add";
import SlideList from "./list";

function ImageGalleryManagement() {
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
      <div class="academia-management-area">
        <div class="card min-screen-height">
          {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
            <AddSlide fetch={fetchData} />
          )}

          <SlideList
            fetchSetData={fetchSetData}
            fetchdata={fetchdata}
            data={data}
            logedinData={logedinData}
          />
        </div>
      </div>
    </Layout>
  );
}

export default ImageGalleryManagement;