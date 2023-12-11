import React from "react";
import { CloudDownloadOutlined } from "@ant-design/icons";
const Notices = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="800"
      class="notices-area bg-[white] pt-[100px]"
    >
      <div class="bootstrap-container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 className="text-4xl font-bold">Notices</h2>
          </div>
        </div>
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
  );
};

export default Notices;
