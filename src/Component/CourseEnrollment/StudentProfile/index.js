import React, { useEffect, useState } from "react";
import StudentDeshboardLayout from "../Layout";
import { Tabs } from "antd";
import axios from "axios";
import TabPane from "antd/es/tabs/TabPane";
export default function StudentProfile() {
  const [userData, setUserData] = useState("");
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
  }, []);
  const studentRegId = userData?.id;
  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-manage/show-single-student-profile/${studentRegId}`
      );

      if (singleData) {
        setSingleData(singleData?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [studentRegId]);

  return (
    <StudentDeshboardLayout>
      <div class="mr-5 mt-2">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="flex">
                <div className="h-[100px] w-[100px] border p-2">
                  <img
                    className="w-full h-full"
                    src="/uploads/about-us.jpg"
                    alt="user"
                  />
                </div>
                <div className="ml-2">
                  <h2>{singleData?.fullName}</h2>
                  <h5>{singleData?.address}</h5>
                </div>
              </div>
              <div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Overview" key="1">
                    <div class="row">
                      <div class="col-lg-12">
                        <div className="text-right">
                          <button className="bg-[#06BBCC] text-white px-3 py-2">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Name</div>
                          <div className="ml-[75px]">
                            {singleData?.fullName}
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Email</div>
                          <div className="ml-[75px]">{singleData?.email}</div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Phone no</div>
                          <div className="ml-[75px]">
                            {singleData?.phoneNumber}
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Address</div>
                          <div className="ml-[75px]">{singleData?.address}</div>
                        </div>
                      </div>{" "}
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Date of birth</div>
                          <div className="ml-[75px]">{singleData?.dob}</div>
                        </div>
                      </div>{" "}
                      <div class="col-lg-6 mb-2">
                        <div class="flex bg-[#F0FBFC] rounded p-2">
                          <div>Gender</div>
                          <div className="ml-[75px]">{singleData?.gender}</div>
                        </div>
                      </div>{" "}
                    </div>
                  </TabPane>
                  <TabPane tab="Attendence" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Result" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentDeshboardLayout>
  );
}
