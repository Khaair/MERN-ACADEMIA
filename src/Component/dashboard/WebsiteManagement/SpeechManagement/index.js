import { useEffect, useState } from "react";
import Layout from "../../layout";
import axios from "axios";
import AddSpeech from "./add";
import SpeechList from "./list";

function SpeechManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        `${process.env.REACT_APP_COURSE}/speech-manage/speech-show`
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
            <AddSpeech fetch={fetchData} />
          )}

          <SpeechList
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

export default SpeechManagement;
