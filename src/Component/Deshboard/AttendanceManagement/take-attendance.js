import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Pagination,
  DatePicker,
} from "antd";
import axios from "axios";
import React, { useState } from "react";
const { Option } = Select;

const TakeAttendance = ({ logedinData, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState();
  const [form] = Form.useForm();
  const [formGender] = Form.useForm();
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const pageSize = 5;
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchSingleData = async (id) => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/class-manage/show-single-class/${id}`
      );

      setSingleData(singleData);
    } catch (err) {
      console.log(err);
    }
  };

  const showModal = (id) => {
    setIsModalOpen(true);

    fetchSingleData(id);
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
    setCurrentPage(page); //Step 3: Update current page when pagination changes
  };

  const handleCheckboxChange = (e, studentRegId, studentName) => {
    if (e.target.checked) {
      setSelectedStudents([...selectedStudents, { studentRegId, studentName }]);
    } else {
      setSelectedStudents(
        selectedStudents.filter(
          (student) => student.studentRegId !== studentRegId
        )
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = await form.validateFields();
    console.log("values", values);

    console.log("selectedStudents", selectedStudents);

    try {
      const response = await fetch(
        "http://localhost:8080/api/attendance-manage/attendance-save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: values?.attendanceDate,
            classId: singleData?.data?._id,
            attendedStudentList: selectedStudents,
          }),
        }
      );

      const responseData = await response.json();
      if (responseData?.status === "200") {
        console.log("responseData", responseData);
      }
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const sub = singleData?.data?.studentList?.length - selectedStudents?.length;

  return (
    <div class="list-area">
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
              <th>Teacher Name</th>
              <th>Subject Name</th>
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
                        <td>
                          {(el?.className === "10" && "Ten") ||
                            (el?.className === "09" && "Nine") ||
                            (el?.className === "08" && "Eight") ||
                            (el?.className === "07" && "Seven") ||
                            (el?.className === "06" && "Six")}
                        </td>
                        <td>
                          {(el?.section === "1" && "A") ||
                            (el?.section === "2" && "B") ||
                            (el?.section === "3" && "C")}
                        </td>
                        <td>{el?.teacherName}</td>
                        <td>{el?.subjectName}</td>
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
                                Take Attendance
                              </Button>
                            </div>
                          </td>
                        )}
                      </tr>
                    );
                  })
              : data
                  ?.filter((el) =>
                    el?.className
                      ?.toLowerCase()
                      ?.includes(searchValue?.toLowerCase())
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
                        <td>
                          {(el?.className === "10" && "Ten") ||
                            (el?.className === "09" && "Nine") ||
                            (el?.className === "08" && "Eight") ||
                            (el?.className === "07" && "Seven") ||
                            (el?.className === "06" && "Six")}
                        </td>
                        <td>
                          {(el?.section === "1" && "A") ||
                            (el?.section === "2" && "B") ||
                            (el?.section === "3" && "C")}
                        </td>
                        <td>{el?.teacherName}</td>
                        <td>{el?.subjectName}</td>

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
                                Take Attendance
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
        title="Take Attendance"
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
                      <div class="col-lg-9">
                        <Form.Item
                          name="attendanceDate"
                          label="Date of Attendance"
                          rules={[
                            {
                              required: true,
                              message: "Please input the date of attendance!",
                            },
                          ]}
                        >
                          <DatePicker className="other-type-input w-1/2" />
                        </Form.Item>

                        <ul>
                          {singleData?.data?.studentList?.map((student) => (
                            <li>
                              <label key={student?._id}>
                                <input
                                  className="mr-2 mb-3"
                                  type="checkbox"
                                  value={student?.studentRegId}
                                  checked={selectedStudents?.some(
                                    (s) =>
                                      s?.studentRegId === student?.studentRegId
                                  )}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e,
                                      student?.studentRegId,
                                      student?.studentName
                                    )
                                  }
                                />
                                {student?.studentName}
                              </label>
                            </li>
                          ))}
                        </ul>

                        <Form.Item>
                          <Button type="primary" ghost onClick={handleSubmit}>
                            Submit
                          </Button>
                        </Form.Item>
                      </div>

                      <div class="col-lg-3">
                        <div class="shadow-md rounded p-3">
                          <h6 className="text-primary text-base">
                            Total Student:{" "}
                            {singleData?.data?.studentList?.length}
                          </h6>
                          <h6 className="text-success text-base">
                            Present Student: {selectedStudents?.length}
                          </h6>
                          <h6 className="text-danger text-base">
                            Absent Student: {sub}
                          </h6>
                        </div>
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

export default TakeAttendance;
