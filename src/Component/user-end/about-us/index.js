import React from "react";
import Layout from "../Layout";
import {
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";
import AboutUsContainer from "../home/about-us";
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
                <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center">
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
                <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center">
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
                <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center">
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
                <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center">
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
     <AboutUsContainer/>
    </Layout>
  );
};

export default AboutUs;
