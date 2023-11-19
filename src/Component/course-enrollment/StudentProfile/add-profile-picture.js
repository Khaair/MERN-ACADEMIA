import React, { useEffect, useState } from "react";
import { Button, Form, Upload } from "antd";
import axios from "axios";

const AddProfilePic = () => {
  const [singleDataId, setSingleDataId] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [userData, setUserData] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
    console.log("userLogedinData", userLogedinData);
  }, []);

  const studentId = userData?.id;

  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-profile-picture/fetch-single-student-profile-picture/${userData?.id}`
      );

      if (singleData) {
        console.log("sid", singleData?.data);
        setSingleData(singleData?.data);
        setSingleDataId(singleData?.data?._id);
      }
      console.log("singleData", singleData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [userData?.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      console.log("file test", values.file[0].originFileObj);
      const formData = new FormData();
      formData.append("studentId", studentId);
      formData.append("file", values.file[0].originFileObj);
      const res = await fetch(
        `http://localhost:8080/api/student-profile/student-profile-update/${singleDataId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        // setMessage(data?.message);
        // fetchSingleData();
        console.log("save data successfully", data);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div>
      <div className="h-50 w-50 mb-10 rounded border-solid border-2 border-[#ddd]-600 p-2">
        <img
          className="w-full h-full object-cover"
          src={`/uploads/${singleData?.file}`}
          alt=""
        />
      </div>

      <div>
        <Form className="form-input-item" form={form} layout="vertical">
          <Form.Item
            name="file"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
            rules={[
              {
                required: true,
                message: "Please select the file!",
              },
            ]}
          >
            <Upload name="file" listType="picture">
              <Button>Upload Image</Button>
            </Upload>
          </Form.Item>
          <div className="mt-3">
            <Form.Item>
              <Button type="primary" ghost onClick={handleUpdate}>
                Update
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProfilePic;
