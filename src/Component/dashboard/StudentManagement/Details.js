import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Details(getstudentId) {
  const [singleResultData, setSingleResultData] = useState([]);

  const fetchSingleResultdata = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_COURSE}/student-manage/show-single-student/${getstudentId?.getstudentId}`
      );
      setSingleResultData(data?.data);
      console.log("data student single", data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchSingleResultdata();
  }, [getstudentId?.getstudentId]);

  return (
    <>
      <div class="profile-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="pp-and-details-wrapper">
              <div class="profile-picture">
                <img src={`/uploads/${singleResultData?.file}`} alt="" />
              </div>
              <div className="mx-4">
                <b>Name: {singleResultData?.name}</b>
                <br />
                <b>Address: {singleResultData?.address}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
