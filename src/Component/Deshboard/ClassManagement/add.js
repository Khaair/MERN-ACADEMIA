import { Button, Form, Modal, Select, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../../../statement-management/slices/studentSlices";
const { Option } = Select;

const AddClass = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const { list } = useSelector((state) => state?.student);
  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

  const newListData = list.map((item) => {
    return {
      name: item?.fullName,
      id: item.studentRegId,
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = await form.validateFields();

    const studentObjectData = list?.map((item) => {
      return {
        ...item,
        studentName: values?.studentList?.filter(
          (el) => el === item?.studentRegId
        ),
      };
    });

    const studentFinalData = studentObjectData?.map((item) => {
      if (item?.studentName?.length > 0) {
        return {
          studentName: item?.fullName,
          studentRegId: item?.studentRegId,
        };
      }
    });

    const studentFinalDataRemoveNull = studentFinalData.filter(
      (x) => x != null
    );

    if (studentFinalDataRemoveNull) {
      try {
        const response = await fetch(
          "http://localhost:8080/api/class-manage/class-save",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              className: values?.className,
              section: values?.section,
              teacherName: values?.teacherName,
              subjectName: values?.subjectName,
              studentList: studentFinalDataRemoveNull,
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
    }
  };

  return (
    <>
      <div class="add-student-wrapper">
        <div className="card-title custom-button">
          <AppstoreOutlined style={{ fontSize: "20px" }} />
          <div class="ml-5">Class Management</div>
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            ghost
            className="custom-button"
          >
            <PlusCircleOutlined />
            Add Class
          </Button>
        </div>
      </div>

      <hr style={{ height: "0.5px" }} className="mt-2" />

      <Modal
        title="Add New Class"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={false}
      >
        <div className="form-area mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <Form className="form-input-item" form={form} layout="vertical">
                  <div class="row">
                    <div class="col-lg-12">
                      <Form.Item
                        label="Student List"
                        name="studentList"
                        textColor="red"
                        rules={[
                          {
                            required: true,
                            message: "Please input the student list!",
                          },
                        ]}
                      >
                        <Select
                          mode="multiple"
                          placeholder="Inserted are removed"
                          value={selectedItems}
                          onChange={setSelectedItems}
                          style={{ width: "100%" }}
                          options={newListData?.map((item) => ({
                            label: item?.name,
                            value: item?.id,
                          }))}
                        />
                      </Form.Item>
                      <Form.Item
                        name="className"
                        label="Class Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input the class name!",
                          },
                        ]}
                      >
                        <Select placeholder="Select">
                          <Option value="10">Ten</Option>
                          <Option value="09">Nine</Option>
                          <Option value="08">Eight</Option>
                          <Option value="07">Seven</Option>
                          <Option value="06">Six</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="section"
                        label="Section"
                        rules={[
                          {
                            required: true,
                            message: "Please input the section!",
                          },
                        ]}
                      >
                        <Select placeholder="Select">
                          <Option value="1">A</Option>
                          <Option value="2">B</Option>
                          <Option value="3">C</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="Teacher Name"
                        name="teacherName"
                        rules={[
                          {
                            required: true,
                            message: "Please input the teacher Name!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          placeholder="Search to Select"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "")?.includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              ?.toLowerCase()
                              ?.localeCompare(
                                (optionB?.label ?? "")?.toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Not Identified",
                            },
                            {
                              value: "2",
                              label: "Closed",
                            },
                            {
                              value: "3",
                              label: "Communicated",
                            },
                            {
                              value: "4",
                              label: "Identified",
                            },
                            {
                              value: "5",
                              label: "Resolved",
                            },
                            {
                              value: "6",
                              label: "Cancelled",
                            },
                          ]}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Subject Name"
                        name="subjectName"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Select>
                          <Option value="male">Bangla</Option>
                          <Option value="female">English</Option>
                          <Option value="other">Math</Option>
                          <Option value="other">ICT</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" ghost onClick={handleSubmit}>
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
      </Modal>
    </>
  );
};

export default AddClass;
