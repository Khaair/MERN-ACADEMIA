import { Button, Checkbox, Form, Input, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

export default function CheckOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { id } = useParams();
  const [form] = Form.useForm();

  const handleModalShow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setError("");
    form.resetFields();
  };

  const { data, status } = useQuery("my-query-key", async () => {
    if (id) {
      const response = await fetch(
        `http://localhost:8080/api/course/course-show-single/${id}`
      );
      return response.json();
    }
  });

  useEffect(() => {
    const GenerateOrderNumber =
      Date.now() + Math.floor(Math.random() * 100000) + 1;
    setOrderNumber(GenerateOrderNumber);
  }, []);

  let storedData = data && data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = await form.validateFields();

    try {
      let response = await axios.post(
        `${process.env.REACT_APP_COURSE}/course-order/course-order-save`,
        {
          orderId: orderNumber,
          courseId: storedData?._id,
          email: values?.email,
          phoneNumber: values?.phoneNumber,
          transactionId: values?.transactionId,
        }
      );
      if (response?.data?.status === "200") {
        setError(response?.data?.message);
        form.resetFields();

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
  return (
    <>
      <Layout>
        <div className="course-checkout-area ">
          <div className="bootstrap-container">
            <div className="container">
              <div className="row px-6">
                <div className="col-lg-8">
                  <div className="w-100 h-100 bg-white rounded overflow-hidden shadow-lg ">
                    <div className="px-6 py-4">
                      <div className="checkout-course-details-wrapper">
                        <div>
                          <img
                            className="w-100"
                            src={`/uploads/${data?.file}`}
                            alt="Sunset in the mountains"
                          />
                        </div>
                        <div className="mx-3">
                          <div className="text-xl mb-2">
                            <h4>{data?.courseTitle}</h4>
                          </div>
                          <p className="text-gray-700 text-base">
                            {data?.courseSubTitle}
                          </p>
                          <div className="course-card-price-wparrer pt-3">
                            ৳ {data?.price}
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className=" max-w-sm bg-white rounded overflow-hidden shadow-lg ">
                    <div className="px-6 py-4">
                      <div className="checkout-item-wrapper">
                        <p className="mb-2">Total Price </p>
                        <p>৳ {data?.price}</p>
                      </div>
                      <div className="checkout-item-wrapper">
                        <p className="mb-2">Sub Total Price </p>
                        <p>৳ {data?.price}</p>
                      </div>
                      <hr></hr>

                      <div className="checkout-item-wrapper mt-2">
                        <p className="mb-2 ">Total Price </p>
                        <p>৳ {data?.price}</p>
                      </div>

                      <div className="checkout-item-wrapper">
                        <p>Promo Code </p>
                        <p>
                          <Input></Input>
                        </p>
                      </div>
                      <Button>Apply</Button>

                      <div className="mt-3">
                        <button
                          onClick={handleModalShow}
                          className="bg-green-500 w-100 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        >
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            width={700}
            footer={false}
          >
            <div className="payment-details-area">
              <div className="px-6 py-4">
                <div className="mb-3">অর্ডার আইডি #{orderNumber}</div>
                <div className="checkout-item-wrapper">
                  <p className="mb-2">IELTS Course by Munzereen Shahid </p>
                  <p>৳2500</p>
                </div>
                <div className="checkout-item-wrapper">
                  <p className="mb-2">Sub Total Price </p>
                  <p>৳2500</p>
                </div>
                <hr></hr>
                <div className="checkout-item-wrapper mt-2">
                  <p className="mb-2 ">Total Price </p>
                  <p>৳2500</p>
                </div>

                <h6>Payment Method </h6>
                <p>
                  For bkash payment you have to use bkash send money
                  option.After send money you have to enter your trnsaction
                  number here and Click Sumbit.
                  <br />
                  Our Personal Bkash Number is{" "}
                  <span className="text-primary">01777075237</span>
                </p>

                <div>
                  <div className="row">
                    <div className="col-lg-12 mt-3 ">
                      <Form form={form} layout="vertical">
                        <Form.Item
                          name="email"
                          label="Enter your email"
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
                          label="Enter your phone no"
                          name="phoneNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input the phone number!",
                            },
                          ]}
                        >
                          <Input placeholder="Phone number" />
                        </Form.Item>

                        <div className="rounded-md border mt-3 p-10 border-slate-300">
                          <div className="checkout-item-wrapper mt-2">
                            <div className="payment-check-box">
                              <Checkbox checked={true}></Checkbox>
                              <p className="mb-2 mx-2">Bkash </p>
                            </div>
                            <div className="bkash-payment-image">
                              <img
                                src="/uploads/bkash_payment_logo.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="checkout-item-wrapper mt-2">
                            <p className="mb-2 ">Transaction ID </p>
                            <div className="bkash-payment-image">
                              <Form.Item
                                name="transactionId"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the transaction id!",
                                  },
                                ]}
                              >
                                <Input placeholder="Transaction ID" />
                              </Form.Item>
                            </div>
                          </div>
                        </div>

                        <p className="text-success mt-2">{error}</p>

                        <Form.Item>
                          <div className="mt-3">
                            <button
                              onClick={handleSubmit}
                              className="bg-green-500 w-100 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            >
                              Submit
                            </button>
                          </div>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </Layout>
    </>
  );
}
