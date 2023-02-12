import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";

export default function CheckOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState();
  console.log(orderNumber, "orderNumber");
  const { id } = useParams();
  const [form] = Form.useForm();

  const handleEditOk = () => {
    setIsModalOpen(false);
  };

  const handleModalShow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, status } = useQuery("my-query-key", async () => {
    if (id) {
      const response = await fetch(
        `http://localhost:8080/api/course/course-show-single/${id}`
      );
      return response.json();
    }
  });

  console.log("data checkout", data);
  console.log("status", status);

  useEffect(() => {
    const GenerateOrderNumber =
      Date.now() + Math.floor(Math.random() * 100000) + 1;
    setOrderNumber(GenerateOrderNumber);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("address", values.address);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch("http://localhost:8080/api/save", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.status === "200") {
        console.log(data);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <>
      <Layout>
        <div class="course-checkout-area ">
          <div class="bootstrap-container">
            <div class="container">
              <div class="row px-6">
                <div class="col-lg-8">
                  <div className="w-100 h-100 bg-white rounded overflow-hidden shadow-lg ">
                    <div class="px-6 py-4">
                      <div className="checkout-course-details-wrapper">
                        <div>
                          <img
                            class="w-100"
                            src={`/uploads/${data?.file}`}
                            alt="Sunset in the mountains"
                          />
                        </div>
                        <div className="mx-3">
                          <div class="text-xl mb-2">
                            <h4>{data?.courseTitle}</h4>
                          </div>
                          <p class="text-gray-700 text-base">
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
                <div class="col-lg-4">
                  <div className=" max-w-sm bg-white rounded overflow-hidden shadow-lg ">
                    <div class="px-6 py-4">
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
                          class="bg-green-500 w-100 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
            width={600}
            footer={false}
          >
            <div className="payment-details-area">
              <div class="px-6 py-4">
                <div class="mb-3">অর্ডার আইডি #{orderNumber}</div>
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
                    <div className="col-lg-12 ">
                      <Form form={form} layout="vertical">
                        <Form.Item
                          name="fullName"
                          label="Enter your email"
                          rules={[
                            {
                              required: true,
                              message: "Please input the email!",
                            },
                          ]}
                        >
                          <Input placeholder="Full Name" />
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
                          <Input placeholder="Phone Number" />
                        </Form.Item>

                        <div class="rounded-md border mt-2 p-10 border-slate-300">
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

                        <Form.Item>
                          <div className="mt-3">
                            <button
                              onClick={handleModalShow}
                              class="bg-green-500 w-100 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
