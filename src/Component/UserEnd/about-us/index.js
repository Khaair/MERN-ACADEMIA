import React from "react";
import Layout from "../Layout";
import {
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";
const AboutUs = () => {
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">About us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="our-facilities-area pt-[100px]">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-10px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <UserOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Skilled Instructor</h3>
                  <h6 className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <GlobalOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Online Classes</h3>
                  <h6 className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <HomeOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Home Project</h3>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <BookOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Book Library</h3>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-us-area pt-[100px]  pb-[100px]">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div className="h-[500px]">
                  <img
                    className="h-full w-full object-cover"
                    src="/uploads/about-us.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="p-4">
                  <div>
                    <h6>About us</h6>
                    <h2 className="leading-10 mt-3">
                      Welcome to Sherpur govt college
                    </h2>
                    <p className="mt-3">
                      Sherpur Government College is an educational institution
                      located in Sherpur, Bangladesh. The college offers a
                      variety of academic programs and courses to students. It
                      serves as a platform for higher education and skill
                      development in the region. With a focus on providing
                      quality education, Sherpur Government College plays a
                      significant role in shaping the academic and personal
                      growth of its students. It serves as a hub for learning,
                      fostering a positive environment for intellectual
                      exploration, skill acquisition, and overall development.
                      Sherpur Government College is an educational institution
                      located in Sherpur, Bangladesh. The college offers a
                      variety of academic programs and courses to students. It
                      serves as a platform for higher education and skill
                      development in the region. With a focus on providing
                      quality education, Sherpur Government College plays a
                      significant role in shaping the academic and personal
                      growth of its students. It serves as a hub for learning,
                      fostering a positive environment for intellectual
                      exploration, skill acquisition, and overall development.
                    </p>
                  </div>
                  <button className="mt-3 bg-[#06BBCC] text-white px-5 py-3">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
