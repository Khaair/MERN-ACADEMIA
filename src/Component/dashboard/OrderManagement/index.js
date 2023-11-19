import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Form, Input, Button, notification, Modal } from "antd";
import { SmileOutlined, DeleteOutlined, MailOutlined } from "@ant-design/icons";

function OrderManage() {
  const [data, setData] = useState([]);

  const [transactionIdData, setTransactionIdData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransactionIdModalOpen, setIsTransactionIdModalOpen] =
    useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [form] = Form.useForm();

  const [logedinData, setLogedinData] = useState([]);
  const [email, setEmail] = useState("");

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  console.log("logedinData deshboard", logedinData);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/course-order/course-order-show"
      );
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

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

  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(`http://localhost:8080/api/delete/${id}`);
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      setData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setError("");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleTransactionIdOk = () => {
    setIsTransactionIdModalOpen(false);
  };

  const handleTransactionIdCancel = () => {
    setIsTransactionIdModalOpen(false);
  };

  const showTransactionIdModal = () => {
    setIsTransactionIdModalOpen(true);
  };

  const handleTransactinIdSubmit = async (e) => {
    e.preventDefault();

    const values = await form.validateFields();

    try {
      let response = await axios.post(
        `${process.env.REACT_APP_COURSE}/transaction-id/transaction-id-save`,
        {
          transactionId: values?.transactionId,
        }
      );
      if (response?.data?.status === "200") {
        setError(response?.data?.message);
        form.resetFields();
        fetchdata();
        fetchTransactionIddata();
        setLoading(false);
      } else if (response?.data?.status === "400") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "401") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "404") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "500") {
        setError(response?.data?.message);

        setLoading(false);
      }
      console.log(response, "success");
    } catch (er) {
      console.log("error checkout", er);
    }
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);

    fetchdata();
  };

  const showEditModal = (idd) => {
    setIsEditModalOpen(true);
    setStudentId(idd);
  };

  const fetchTransactionIddata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/transaction-id/transaction-id-show"
      );
      setTransactionIdData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchTransactionIddata();
  }, []);

  const deleteHandelerTransactionId = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/transaction-id/transaction-id-delete/${id}`
      );
      console.log(mydata);

      const filterd = transactionIdData.filter((a) => a._id !== id);
      setTransactionIdData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    const courseOrders = data?.map((order) => {
      return {
        ...order,

        transactionIds: transactionIdData?.filter(
          (transactionItem) =>
            order?.transactionId === transactionItem?.transactionId
        ),
      };
    });
    setFilteredData(courseOrders);
  }, [data, transactionIdData]);

  return (
    <Layout>
      <div class="academia-management-area">
        {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
          <div class="row">
            <div class="col-lg-12 ">
              <div class="card-title-section">
                <div class="add-student-wrapper">
                  <div className="card-title">Order Management</div>
                  <div>
                    <Button
                      onClick={showTransactionIdModal}
                      type="primary"
                      ghost
                    >
                      Inserted TransactionId List
                    </Button>
                    <Button
                      className="mx-2"
                      onClick={showModal}
                      type="primary"
                      ghost
                    >
                      Add TransactionId
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="row">
          <div class="col-lg-12">
            <div className="card">
              <table>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>OrderId</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>TransactionId</th>
                    <th>Payment</th>

                    {logedinData?.roles?.join("").toString() ===
                      "ROLE_ADMIN" && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((el, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{el?.orderId}</td>
                        <td>{el?.email}</td>
                        <td>{el?.phoneNumber}</td>
                        <td>{el?.transactionId}</td>
                        <td
                          className={
                            el?.transactionIds.length > 0
                              ? "text-primary"
                              : "text-danger"
                          }
                        >
                          {el?.transactionIds.length > 0 ? "true" : "false"}
                        </td>

                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && (
                          <td>
                            <MailOutlined
                              style={{ color: "blue" }}
                              onClick={handleClick}
                            />
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal
          title="Add TransactionId"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={600}
          footer={false}
        >
          <>
            {contextHolder}

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
                        name="transactionId"
                        label="TransactionId"
                        rules={[
                          {
                            required: true,
                            message: "Please input the transactionId!",
                          },
                        ]}
                      >
                        <Input placeholder="TransactionId" />
                      </Form.Item>
                      <p className="text-success mt-2">{error}</p>

                      <Form.Item>
                        <Button
                          type="primary"
                          ghost
                          onClick={handleTransactinIdSubmit}
                        >
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

        <Modal
          title="TransactionId List"
          open={isTransactionIdModalOpen}
          onOk={handleTransactionIdOk}
          onCancel={handleTransactionIdCancel}
          width={800}
          footer={false}
        >
          <>
            {contextHolder}

            <div className="form-area mt-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 ">
                    <table className="table table-fixed">
                      <thead>
                        <tr>
                          <th scope="col">Sl</th>

                          <th scope="col">TransactionId</th>

                          {logedinData?.roles?.join("").toString() ===
                            "ROLE_ADMIN" && <th scope="col">Action</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {transactionIdData?.map((el, ind) => {
                          return (
                            <tr key={ind}>
                              <th scope="row">{ind + 1}</th>

                              <td>{el?.transactionId}</td>

                              {logedinData?.roles?.join("").toString() ===
                                "ROLE_ADMIN" && (
                                <td>
                                  <DeleteOutlined
                                    onClick={() =>
                                      deleteHandelerTransactionId(el._id)
                                    }
                                    className="mx-2"
                                    style={{ color: "red" }}
                                  />
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </Layout>
  );
}

export default OrderManage;
