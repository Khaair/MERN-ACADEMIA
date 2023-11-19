import React from "react";
import Layout from "../Layout";

const TeacherListWebView = () => {
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">Teacher list</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#F0F8FF] pt-[100px] pb-[100px]">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="shadow-lg flex justify-between p-4 bg-white rounded">
                  <div className="h-[250px] w-[250px] mt-3">
                    <img
                      className="h-full w-full object-contain"
                      src="/uploads/1676365597171default-avatar.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="h-[250px] w-[250px] mt-3">
                    <img
                      className="h-full w-full object-contain"
                      src="/uploads/1676365597171default-avatar.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="h-[250px] w-[250px] mt-3">
                    <img
                      className="h-full w-full object-contain"
                      src="/uploads/1676365597171default-avatar.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="h-[250px] w-[250px] mt-3">
                    <img
                      className="h-full w-full object-contain"
                      src="/uploads/1676365597171default-avatar.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherListWebView;
