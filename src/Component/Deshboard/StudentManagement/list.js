import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Upload,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../../../statement-management/slices/studentSlices";
const { Option } = Select;

const StudentList = ({ logedinData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleID, setSingleId] = useState("");
  const [form] = Form.useForm();
  const [formGender] = Form.useForm();
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state?.student);
  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id) => {
    // fetchData();
    setIsModalOpen(true);
    setSingleId(id);
    fetchSingleData(id);
  };

  const fetchSingleData = async (id) => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-manage/show-single-student/${id}`
      );

      form.setFieldsValue({
        name: singleData?.data?.name,
        email: singleData?.data?.email,
        phoneNumber: singleData?.data?.phoneNumber,
        courseId: singleData?.data?.courseId,
        studentId: singleData?.data?.studentId,
        address: singleData?.data?.address,
        // dob: singleData?.data?.dob,
        gender: singleData?.data?.gender,
        designation: singleData?.data?.designation,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteStudent = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/student-manage/student-delete/${id}`
      );
      dispatch(fetchAllStudents());
    } catch (er) {
      console.log(er);
    }
  };

  const handleGenderFilter = async (value) => {
    try {
      const filteredData = list?.filter((item) => item?.gender === value);

      if (filteredData) {
        setFilterData(filteredData);
      } else {
        setFilterData([]);
      }
    } catch (err) {
      console.log("err", err);
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
      formData.append("dob", values.dob);
      formData.append("courseId", values.courseId);
      formData.append("studentId", values.studentId);
      formData.append("address", values.address);
      formData.append("gender", values.gender);
      formData.append("file", values.file[0].originFileObj);
      //

      const res = await axios.post(
        `http://localhost:8080/api/student-manage/update-student/${singleID}`,

        formData
      );

      if (!res.data) {
        console.log("Request failed with status:", res.status);
        return;
      }

      const data = res.data;
      console.log("data up", data);

      if (data?.status === 201) {
        handleOk();
        dispatch(fetchAllStudents());
      }

      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page); // Step 3: Update current page when pagination changes
  };
  return (
    <div class="list-area mt-4">
      <div class="filter-and-search-wrapper mb-3">
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

      <table className="table-responsive">
        <thead>
          <tr>
            <th scope="col">Student reg id</th>
            <th scope="col">User name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Gender</th>
            <th scope="col">Image</th>
            {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
              <th scope="col">Action</th>
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
                      <td>{el?.studentRegId}</td>
                      <td>{el?.fullName}</td>
                      <td>{el?.email}</td>
                      <td>{el?.password}</td>
                      <td>{el?.class}</td>
                      <td>{el?.section}</td>
                      <td>{el?.gender}</td>
                      <td className="data-show-img">
                        <img src={`/uploads/${el?.file}`} alt="" />
                      </td>
                      {logedinData?.roles?.join("").toString() ===
                        "ROLE_ADMIN" && (
                        <td>
                          <div className="d-flex">
                            <Button
                              //   onClick={() => showDetailsModal(el?._id)}
                              type="primary"
                              ghost
                            >
                              Details
                            </Button>

                            <Button
                              onClick={() => showModal(el?._id)}
                              type="primary"
                              ghost
                              className="mx-2"
                            >
                              Edit
                            </Button>

                            <Button
                              onClick={() => deleteStudent(el?._id)}
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
            : list
                ?.filter((el) =>
                  el.fullName
                    ?.toLowerCase()
                    ?.includes(searchValue?.toLowerCase())
                )
                .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((el, ind) => {
                  if (
                    searchValue &&
                    el?.fullName &&
                    !el?.fullName
                      ?.toLowerCase()
                      ?.includes(searchValue.toLowerCase())
                  ) {
                    return null; // If searchValue is provided and name doesn't match, skip rendering
                  }
                  return (
                    <tr key={ind}>
                      <td>{el?.studentRegId}</td>
                      <td>{el?.fullName}</td>
                      <td>{el?.email}</td>
                      <td>{el?.password}</td>
                      <td>{el?.class}</td>
                      <td>{el?.section}</td>
                      <td>{el?.gender}</td>
                      <td className="data-show-img">
                        <img src={`/uploads/${el?.file}`} alt="" />
                      </td>
                      {logedinData?.roles?.join("").toString() ===
                        "ROLE_ADMIN" && (
                        <td>
                          <div className="d-flex">
                            <Button
                              //   onClick={() => showDetailsModal(el?._id)}
                              type="primary"
                              ghost
                            >
                              Details
                            </Button>

                            <Button
                              onClick={() => showModal(el?._id)}
                              type="primary"
                              ghost
                              className="mx-2"
                            >
                              Edit
                            </Button>

                            <Button
                              onClick={() => deleteStudent(el?._id)}
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
      <div class="text-center mt-5 mb-5">
        <Pagination
          current={currentPage}
          total={filterData.length > 0 ? filterData.length : list?.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
      <Modal
        title=" Student"
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
                          label="Course Id"
                          name="courseId"
                          rules={[
                            {
                              required: true,
                              message: "Please input the courseId!",
                            },
                          ]}
                        >
                          <Input placeholder="courseId" />
                        </Form.Item>
                        <Form.Item
                          label="Student Id"
                          name="studentId"
                          rules={[
                            {
                              required: true,
                              message: "Please input the studentId!",
                            },
                          ]}
                        >
                          <Input placeholder="studentId" />
                        </Form.Item>
                      </div>

                      <div class="col-lg-6">
                        <Form.Item
                          name="dob"
                          label="Date of birth"
                          rules={[
                            {
                              required: true,
                              message: "Please input the studentId!",
                            },
                          ]}
                        >
                          <DatePicker className="other-type-input" />
                        </Form.Item>
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
                          label="Gender"
                          name="gender"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                          </Select>
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
                    </div>
                    <div className="mt-3">
                      <Form.Item>
                        <Button type="primary" ghost onClick={handleUpdate}>
                          Submit
                        </Button>
                      </Form.Item>
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

export default StudentList;
