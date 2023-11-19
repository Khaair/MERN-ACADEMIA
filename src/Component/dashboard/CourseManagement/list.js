import {
  Button,
  Form,
  Input,
  Modal,
  Upload,
  Select,
  Pagination,
  notification,
} from "antd";
import axios from "axios";
import React, { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
const { Option } = Select;

const CourseList = ({ logedinData, data, fetchData }) => {
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

  console.log("data course", data);

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
        `http://localhost:8080/api/course-manage/show-single-course/${id}`
      );
      console.log("singleData", singleData);
      form.setFieldsValue({
        courseTitle: singleData?.data?.courseTitle,
        courseSubTitle: singleData?.data?.courseSubTitle,
        price: singleData?.data?.price,
        description: singleData?.data?.description,
        instructorName: singleData?.data?.instructorName,
        instructorDesignation: singleData?.data?.instructorDesignation,
        learnFromCourse: singleData?.data?.learnFromCourse,
        courseContent: singleData?.data?.courseContent,
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
      formData.append("courseTitle", values.courseTitle);
      formData.append("courseSubTitle", values.courseSubTitle);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("instructorName", values.instructorName);
      formData.append("instructorDesignation", values.instructorDesignation);
      formData.append("learnFromCourse", values.learnFromCourse);
      formData.append("courseContent", values.courseContent);
      formData.append("file", values.file[0].originFileObj);
      const res = await fetch(
        `http://localhost:8080/api/course-manage/course-update/${singleID}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log("data up", data);
      if (data?.info === "updated") {
        handleOk();
        fetchData();
      }

      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const deleteCourse = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/course-manage/delete-course/${id}`
      );
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      fetchData();
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

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Data saved successfully",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };
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
        {/* <div className="filter-wrapper">
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
        </div> */}
      </div>
      <div class="table-area">
        <table>
          <thead>
            <tr>
              <th scope="col">Banner</th>
              <th scope="col">Title</th>
              <th scope="col">Ins. Name</th>
              <th scope="col">Ins. Designation</th>
              <th scope="col">Learn From Course</th>
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <th scope="col">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0
              ? filterData
                  ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  .map((el, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="data-show-img">
                          <img src={`/uploads/${el?.file}`} alt="" />
                        </td>
                        <td>{el?.courseTitle}</td>
                        <td>{el?.instructorName}</td>
                        <td>{el?.instructorDesignation}</td>
                        <td>{el?.learnFromCourse}</td>

                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div className="d-flex">
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteCourse(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
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
                    el?.courseTitle
                      ?.toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  .map((el, ind) => {
                    if (
                      searchValue &&
                      el?.courseTitle &&
                      !el?.courseTitle
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ) {
                      return null; // If searchValue is provided and name doesn't match, skip rendering
                    }
                    return (
                      <tr key={ind}>
                        <td className="data-show-img">
                          <img src={`/uploads/${el?.file}`} alt="" />
                        </td>
                        <td>{el?.courseTitle}</td>
                        <td>{el?.instructorName}</td>
                        <td>{el?.instructorDesignation}</td>
                        <td>{el?.learnFromCourse}</td>

                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div className="d-flex">
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteCourse(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
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
        title="Add New Course"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={false}
      >
        <>
          {contextHolder}

          <div className="form-area mt-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Form
                    className="form-input-item"
                    form={form}
                    layout="vertical"
                  >
                    <div class="row">
                      <div class="col-lg-6">
                        <Form.Item
                          name="courseTitle"
                          label="Course Title"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Course Title!",
                            },
                          ]}
                        >
                          <Input placeholder="Course Title" />
                        </Form.Item>
                        <Form.Item
                          name="courseSubTitle"
                          label="Course Sub Title"
                          rules={[
                            {
                              required: true,
                              message: "Please input the course subtitle!",
                            },
                          ]}
                        >
                          <Input placeholder="Course  course subtitle" />
                        </Form.Item>
                        <Form.Item
                          name="price"
                          label="Price"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Course price!",
                            },
                          ]}
                        >
                          <Input placeholder="Course price" />
                        </Form.Item>
                        <Form.Item
                          label="Description"
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: "Please input the description!",
                            },
                          ]}
                        >
                          <Input.TextArea
                            className="other-type-input"
                            rows={3}
                            placeholder="Description"
                          />
                        </Form.Item>
                        <Form.Item
                          label="Instructor Name"
                          name="instructorName"
                          rules={[
                            {
                              required: true,
                              message: "Please input the instructor name!",
                            },
                          ]}
                        >
                          <Input placeholder="Instructor name" />
                        </Form.Item>
                      </div>
                      <div class="col-lg-6">
                        <Form.Item
                          label="Instructor Designation"
                          name="instructorDesignation"
                          rules={[
                            {
                              required: true,
                              message:
                                "Please input the instructor designation!",
                            },
                          ]}
                        >
                          <Input placeholder="Instructor designation" />
                        </Form.Item>
                        <Form.Item
                          label="Learn From Course"
                          name="learnFromCourse"
                          rules={[
                            {
                              required: true,
                              message: "Please input the learn from course!",
                            },
                          ]}
                        >
                          <Input.TextArea
                            className="other-type-input"
                            rows={3}
                            placeholder="Learn From Course"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Course Content Link"
                          name="courseContent"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Course Content Link!",
                            },
                          ]}
                        >
                          <Input placeholder="Course Content Link" />
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

export default CourseList;

// import {
//   Button,
//   DatePicker,
//   Form,
//   Input,
//   Modal,
//   Pagination,
//   Select,
//   Upload,
// } from "antd";
// import axios from "axios";
// import React from "react";
// const { Option } = Select;

// const CourseList = ({ data, logedinData }) => {
//   const deleteMe = async (id) => {
//     try {
//       if (id) {
//         let mydata = await axios.delete(
//           `http://localhost:8080/api/course/delete/${id}`
//         );
//         console.log(mydata);
//         const filterd = data.filter((a) => a._id !== id);
//         //   setData(filterd);
//       }
//     } catch (er) {
//       console.log(er);
//     }
//   };

//   return (
//     <>
//       <div class="course-list mt-4">
//         <div class="filter-and-search-wrapper mb-3">
//           <div class="search-wrapper">
//             <Form layout="inline">
//               <Form.Item>
//                 <Input
//                   placeholder="Search"
//                   // value={searchValue}
//                   // onChange={handleSearchChange}
//                 />
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//         <div class="table-wrapper">
//           <table>
//             <thead>
//               <tr>
//                 <th scope="col">Banner</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Ins. Name</th>
//                 <th scope="col">Ins. Designation</th>
//                 <th scope="col">Learn From Course</th>

//                 {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
//                   <th scope="col">Action</th>
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((el, ind) => {
//                 return (
//                   <tr key={ind}>
//                     <td className="data-show-img">
//                       <img src={`/uploads/${el?.file}`} alt="" />
//                     </td>
//                     <td>{el?.courseTitle}</td>
//                     <td>{el?.instructorName}</td>
//                     <td>{el?.instructorDesignation}</td>
//                     <td>{el?.learnFromCourse}</td>

//                     {logedinData?.roles?.join("").toString() ===
//                       "ROLE_ADMIN" && (
//                       <td>
//                         <div className="d-flex">
//                           <Button
//                             // onClick={() => showEditModal(el?._id)}
//                             type="primary"
//                             ghost
//                           >
//                             Edit
//                           </Button>

//                           <Button
//                             onClick={() => deleteMe(el?._id)}
//                             type="primary"
//                             ghost
//                             className="mx-2"
//                           >
//                             Delete
//                           </Button>
//                         </div>
//                       </td>
//                     )}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseList;
