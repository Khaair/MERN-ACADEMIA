import React from "react";
import CountUp from "react-countup";
import {
  CloudDownloadOutlined,
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import Layout from "../Layout";
import Carousel from "../carousel";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Layout>
      <Carousel />
      <div class="about-us-area bg-[white] pt-[100px]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-6">
              <Image.PreviewGroup className="h-[150px]">
                <Image
                  className="w-full h-full object-cover"
                  src="/uploads/about-us.jpg"
                  alt="avatar"
                />
              </Image.PreviewGroup>
            </div>
            <div class="col-lg-6">
              <div class="p-4">
                <div>
                  <h6 className="text-[#06BBCC] text-base">ABOUT US</h6>
                  <h2 className="leading-10 mt-3">
                    Welcome to Sherpur govt college
                  </h2>
                  <p className="mt-3 text-justify">
                    Sherpur Government College is an educational institution
                    located in Sherpur, Bangladesh. The college offers a variety
                    of academic programs and courses to students. It serves as a
                    platform for higher education and skill development in the
                    region. With a focus on providing quality education, Sherpur
                    Government College plays a significant role in shaping the
                    academic and personal growth of its students. It serves as a
                    hub for learning, fostering a positive environment for
                    intellectual exploration, skill acquisition, and overall
                    development. Sherpur Government College is an educational
                    institution located in Sherpur, Bangladesh. The college
                    offers a variety of academic programs and courses to
                    students. It serves as a platform for higher education and
                    skill development in the region. With a focus on providing
                    quality education, Sherpur Government College plays a
                    significant role in shaping the academic and personal growth
                    of its students. It serves as a hub for learning.
                  </p>
                </div>
                <button className="mt-4 bg-[#06BBCC] text-white px-5 py-3">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="principal-and-assistent-princpal-message-area bg-[white] pt-[100px]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-6 mb-3">
              <div className="p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg">
                <h3 className="text-[black]">Message from head master</h3>
                <div className="flex mt-2">
                  <div className="w-[150px]">
                    <div className="h-[150px] w-[150px] border border-[black] p-1">
                      <Image
                        className="w-full h-full object-cover"
                        src="/uploads/principal.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="mt-3 h-[43px]">
                      <h6 className="text-sm text-[black]">MD. ABDUR RASHID</h6>
                      <h6 className="text-sm text-[black]">Head Master</h6>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-justify text-[black]">
                      I hope this message finds you all in good health and high
                      spirits. As we commence another academic year, I wanted to
                      take a moment to extend my warmest greetings to each and
                      every member of our school community. At this school, we
                      are committed to providing the highest quality education
                      and fostering an environment of growth, learning, thinking
                      positive and character development.{" "}
                      <Link to="/head-master-speech" className="text-primary">
                        (Read more)
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div className=" p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg">
                <h3 className="text-[black]">Message from head master</h3>

                <div className="flex mt-2">
                  <div className="w-[150px]">
                    <div className="h-[150px] w-[150px] border border-[black] p-1">
                      <Image
                        className="w-full h-full object-contain"
                        src="/uploads/principal.jpg"
                        alt="avatar"
                      />
                    </div>

                    <div className="mt-3 h-[43px]">
                      <h6 className="text-sm text-[black]">MST. NILUFA KHAN</h6>
                      <h6 className="text-sm text-[black]">Ass. Head Master</h6>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-justify text-[black]">
                      I hope this message finds you all in good health and high
                      spirits. As we commence another academic year, I wanted to
                      take a moment to extend my warmest greetings to each and
                      every member of our school community. At this school, we
                      are committed to providing the highest quality education
                      and fostering an environment of growth, learning, thinking
                      positive and character development.{" "}
                      <Link
                        to="/ass-head-master-speech"
                        className="text-primary"
                      >
                        (Read more)
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="our-facilities-area bg-[white] pt-[100px]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <div className="text-[#06BBCC]  p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center">
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
              <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center ">
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
              <div className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center ">
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

      <div class="notices-area bg-[white] pt-[100px]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2>Notices</h2>
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

      <div class="counter-area bg-[white] pt-[100px] pb-[100px]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                <div className="text-4xl font-bold">
                  <CountUp start={0} end={500} duration={10} separator="," />
                  <h4>Teachers</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-3">
              <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                <div className="text-4xl font-bold">
                  <CountUp start={0} end={500} duration={10} separator="," />
                  <h4>Students</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-3">
              <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                <div className="text-4xl font-bold">
                  <CountUp start={0} end={500} duration={10} separator="," />
                  <h4>Stuffs</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-3">
              <div className="bg-[#06BBCC] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                <div className="text-4xl font-bold">
                  <CountUp start={0} end={500} duration={10} separator="," />
                  <h4>Class Rooms</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
