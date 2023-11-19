import React from "react";
import Layout from "../Layout";
import { CloudDownloadOutlined } from "@ant-design/icons";
const Notices = () => {
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">Notices</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notices-area bg-[white] pt-[100px] pb-[100px]">
        <div class="bootstrap-container">
          <div class="row mt-3">
            <div class="col-lg-6 mb-3">
              <div className="flex bg-[#06BBCC] text-white  p-3">
                <div className="bg-[white] p-2  w-[70px]">
                  <p> 28 Mar</p>
                </div>
                <div className="ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="ml-3 text-white">
                  <CloudDownloadOutlined />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div className="flex bg-[#06BBCC] text-white  p-3">
                <div className="bg-[white] p-2  w-[70px]">
                  <p> 28 Mar</p>
                </div>
                <div className="ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="ml-3 text-white">
                  <CloudDownloadOutlined />
                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-3">
              <div className="flex bg-[#06BBCC] text-white  p-3">
                <div className="bg-[white] p-2  w-[70px]">
                  <p> 28 Mar</p>
                </div>
                <div className="ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="ml-3 text-white">
                  <CloudDownloadOutlined />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div className="flex bg-[#06BBCC] text-white  p-3">
                <div className="bg-[white] p-2  w-[70px]">
                  <p> 28 Mar</p>
                </div>
                <div className="ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="ml-3 text-white">
                  <CloudDownloadOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notices;
