import React, { useEffect, useState } from "react";
import StudentDeshboardLayout from "../Layout";
import { Form, Select, Tabs } from "antd";

import { AppstoreOutlined } from "@ant-design/icons";
import axios from "axios";
import AddProfilePic from "./add-profile-picture";
import TabPane from "antd/es/tabs/TabPane";
const { Option } = Select;

export default function StudentProfile() {
  const [userData, setUserData] = useState("");
  const [singleDataId, setSingleDataId] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
    console.log("userLogedinData", userLogedinData);
  }, []);

  const studentRegId = userData?.id;

  console.log("studentRegId", studentRegId);

  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-manage/show-single-student-profile/${studentRegId}`
      );

      if (singleData) {
        console.log("sid", singleData?.data);
        setSingleDataId(singleData?.data?._id);
        setSingleData(singleData?.data);
      }
      console.log("singleData", singleData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [studentRegId]);

  function callback(key) {
    console.log(key);
  }

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
                  <h4>{singleData?.address}</h4>
                </div>
              </div>
              <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
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
