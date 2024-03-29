import { Button, Form, Input, Modal, Upload, Select, Pagination } from "antd";
import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

const { Option } = Select;

const ClassList = ({ logedinData, data, fetchdata, fetchSetData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleID, setSingleId] = useState("");
  const [form] = Form.useForm();
  const [formGender] = Form.useForm();
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id) => {
    setIsModalOpen(true);
    setSingleId(id);
    fetchSingleData(id);
  };

  const fetchSingleData = async (id) => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/teacher-manage/show-single-teacher/${id}`
      );
      form.setFieldsValue({
        name: singleData?.data?.name,
        email: singleData?.data?.email,
        phoneNumber: singleData?.data?.phoneNumber,
        teacherId: singleData?.data?.teacherId,
        address: singleData?.data?.address,
        subject: singleData?.data?.subject,
        qualifications: singleData?.data?.qualifications,
        designation: singleData?.data?.designation,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("teacherId", values.teacherId);
      formData.append("address", values.address);
      formData.append("subject", values.subject);
      formData.append("qualifications", values.qualifications);
      formData.append("designation", values.designation);
      formData.append("file", values.file[0].originFileObj);
      const res = await fetch(
        `http://localhost:8080/api/teacher-manage/update-teacher/${singleID}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log("data up", data);
      if (data?.info === "updated") {
        handleOk();
        fetchdata();
      }

      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const deleteTeacher = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/teacher-manage/delete-teacher/${id}`
      );
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      fetchSetData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  const handleGenderFilter = async (value) => {
    try {
      const filteredData = data?.filter((item) => item?.gender === value);

      if (filteredData) {
        setFilterData(filteredData);
      } else {
        setFilterData([]);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page); // Step 3: Update current page when pagination changes
  };

  const attendedStudentList = [
    {
      studentRegId: "64fb3864a3feb6ddec811de8",
      studentName: "khairuser",
      _id: "650d38e4d84a940746a177c5",
    },
    {
      studentRegId: "64fb389ea3feb6ddec811def",
      studentName: "khairuser01",
      _id: "650d38e4d84a940746a177c6",
    },
  ];

  const attendentStudent = data?.map((item) => {
    const filterDataa = item?.attendedStudentList?.filter(
      (student) => student?.studentRegId === "64fb38b3a3feb6ddec811df6"
    );

    return {
      finalFilterData: filterDataa,
    };
  });

  return (
    <div class="list-area">
      {/* <div class="row">
        <div class="col-lg-6">
          <pre>
            <code>{JSON.stringify(data, null, 4)}</code>
          </pre>
        </div>

        <div class="col-lg-6">
          <pre>
            <code>{JSON.stringify(attendentStudent, null, 4)}</code>
          </pre>
        </div>
      </div> */}
      <div class="filter-and-search-wrapper mt-4 mb-2">
        <div class="search-wrapper">
          <Form layout="inline">
            <Form.Item>
              <Input
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="filter-wrapper">
          <Form form={formGender} layout="vertical">
            <Form.Item
              label=""
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Gender" onChange={handleGenderFilter}>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div class="table-area">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Class Name</th>
              <th>Section</th>
              <th>Date</th>
              <th>Student</th>

              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <th className="text-center">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0
              ? filterData
                  ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  ?.map((el, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{el?.className}</td>
                        <td>{el?.section}</td>

                        <td>{el?.date}</td>
                        {logedinData?.roles?.join("")?.toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div className="d-flex">
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteTeacher(el?._id)}
                                type="primary"
                                ghost
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        )}
                      </tr>
                    );
                  })
              : data
                  ?.filter((el) =>
                    el.className
                      ?.toLowerCase()
                      ?.includes(searchValue.toLowerCase())
                  )
                  ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  ?.map((el, ind) => {
                    if (
                      searchValue &&
                      el?.className &&
                      !el?.className
                        ?.toLowerCase()
                        ?.includes(searchValue?.toLowerCase())
                    ) {
                      return null;
                    }
                    return (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{el?.className}</td>
                        <td>{el?.section}</td>

                        <td>{moment(el?.date).format("LL")} </td>
                        <td>
                          {el?.attendedStudentList?.map((item) => (
                            <p>{item?.studentName}</p>
                          ))}
                        </td>
                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div className="d-flex">
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteTeacher(el?._id)}
                                type="primary"
                                ghost
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        )}
                      </tr>
                    );
                  })}
          </tbody>
        </table>
      </div>
      <div class="text-center mt-5 mb-5">
        <Pagination
          current={currentPage}
          total={filterData.length > 0 ? filterData.length : data?.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>

      <Modal
        title="Add New Teacher"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={false}
      >
        <>
          <div className="form-area mt-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <Form
                    className="form-input-item"
                    form={form}
                    layout="vertical"
                  >
                    <div class="row">
                      <div class="col-lg-6">
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input the name!",
                            },
                          ]}
                        >
                          <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              message: "Please input the email!",
                            },
                          ]}
                        >
                          <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                          label="Phone No"
                          name="phoneNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input the phone number!",
                            },
                          ]}
                        >
                          <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item
                          label="Teacher Id"
                          name="teacherId"
                          rules={[
                            {
                              required: true,
                              message: "Please input the teacherId!",
                            },
                          ]}
                        >
                          <Input placeholder="teacherId" />
                        </Form.Item>
                        <Form.Item
                          label="Image"
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
                      </div>
                      <div class="col-lg-6">
                        <Form.Item
                          label="Address"
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: "Please input the address!",
                            },
                          ]}
                        >
                          <Input placeholder="address" />
                        </Form.Item>

                        <Form.Item
                          label="Subject"
                          name="subject"
                          rules={[
                            {
                              required: true,
                              message: "Please input the subject!",
                            },
                          ]}
                        >
                          <Input placeholder="subject" />
                        </Form.Item>
                        <Form.Item
                          label="Qualifications"
                          name="qualifications"
                          rules={[
                            {
                              required: true,
                              message: "Please input the qualifications!",
                            },
                          ]}
                        >
                          <Input placeholder="qualifications" />
                        </Form.Item>

                        <Form.Item
                          label="Designation"
                          name="designation"
                          rules={[
                            {
                              required: true,
                              message: "Please input the designation!",
                            },
                          ]}
                        >
                          <Input placeholder="designation" />
                        </Form.Item>

                        <Form.Item>
                          <Button type="primary" ghost onClick={handleUpdate}>
                            Submit
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ClassList;
