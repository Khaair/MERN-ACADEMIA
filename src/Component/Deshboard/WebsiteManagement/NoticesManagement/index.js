import { useEffect, useState } from "react";
import Layout from "../../layout";
import axios from "axios";
import AddSlide from "./add";
import SlideList from "./list";

function NoticesManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        `${process.env.REACT_APP_COURSE}/notices-manage/notices-show`
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
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
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
        </div>
      </div>
    </Layout>
  );
}

export default NoticesManagement;
