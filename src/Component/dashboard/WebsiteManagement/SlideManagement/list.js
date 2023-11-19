import { Button, Form, Input, Modal, Upload, Select, Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const SlideList = ({ logedinData, data, fetchdata, fetchSetData }) => {
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
        `${process.env.REACT_APP_COURSE}/slide/show-single-slide/${id}`
      );
      form.setFieldsValue({
        topTitle: singleData?.data?.topTitle,
        title: singleData?.data?.title,
        subTitle: singleData?.data?.subTitle,
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
      formData.append("topTitle", values?.topTitle);
      formData.append("title", values?.title);
      formData.append("subTitle", values?.subTitle);
      formData.append("file", values?.file[0].originFileObj);
      const res = await fetch(
        `${process.env.REACT_APP_COURSE}/slide/slide-update/${singleID}`,
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
  const deleteSlide = async (id) => {
    try {
      let mydata = await axios.delete(
        `${process.env.REACT_APP_COURSE}/slide/slide-delete/${id}`
      );
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      fetchSetData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      </div>
      <div class="table-area">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Top title</th>
              <th>Title</th>
              <th>Sub title</th>
              <th>Image</th>
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <th>Action</th>
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
                        <td>{ind + 1}</td>
                        <td>{el?.topTitle}</td>
                        <td>{el?.title}</td>
                        <td>{el?.subTitle}</td>
                        <td className="data-show-img">
                          <img src={`/uploads/${el?.file}`} alt="" />
                        </td>
                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div>
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteSlide(el?._id)}
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
                  ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  ?.map((el, ind) => {
                    if (
                      searchValue &&
                      el?.title &&
                      !el?.title
                        ?.toLowerCase()
                        ?.includes(searchValue?.toLowerCase())
                    ) {
                      return null; // If searchValue is provided and name doesn't match, skip rendering
                    }
                    return (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{el?.topTitle}</td>
                        <td>{el?.title}</td>
                        <td>{el?.subTitle}</td>
                        <td className="data-show-img">
                          <img src={`/uploads/${el?.file}`} alt="" />
                        </td>
                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <div>
                              <Button
                                onClick={() => showModal(el?._id)}
                                type="primary"
                                ghost
                                className="mx-2"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteSlide(el?._id)}
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
                    <Form.Item
                      name="topTitle"
                      label="Top Title"
                      rules={[
                        {
                          required: true,
                          message: "Please input the top title!",
                        },
                      ]}
                    >
                      <Input placeholder="Top title" />
                    </Form.Item>
                    <Form.Item
                      name="title"
                      label="Title"
                      rules={[
                        {
                          required: true,
                          message: "Please input the title!",
                        },
                      ]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                      name="subTitle"
                      label="Sub Title"
                      rules={[
                        {
                          required: true,
                          message: "Please input the sub title!",
                        },
                      ]}
                    >
                      <Input placeholder="Sub Title" />
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

export default SlideList;
