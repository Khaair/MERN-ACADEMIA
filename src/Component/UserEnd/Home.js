import React from "react";
import CountUp from "react-countup";
import { useQuery } from "react-query";
import {
  CloudDownloadOutlined,
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Layout from "./Layout";
import Carousel from "./carousel";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/api/course-manage/course-show"
    );
    return response.json();
  };
  const { data, status } = useQuery("data", fetchData, {
    refetchOnWindowFocus: true,
  });

  console.log("datadatadata", data);

  return (
    <Layout>
      <Carousel />

      <div class="about-us-area pt-[100px]">
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

      <div class="principal-and-assistent-princpal-message-area pt-[100px]">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-3">
                <div className="p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg">
                  <h3 className="text-[#06BBCC]">Message from head master</h3>

                  <div className="flex mt-3">
                    <div className="w-[150px]">
                      <div className="h-[150px] w-[150px]">
                        <img
                          className="w-full h-full object-contain"
                          src="/uploads/1676365597171default-avatar.png"
                          alt="avatar"
                        />
                      </div>
                      <div className="mt-2">
                        <h6 className="text-sm">MD. ABDUR RASHID</h6>
                        <h6 className="text-sm">Head Master</h6>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum reiciendis culpa nisi, assumenda
                        exercitationem aliquid sapiente provident tempore
                        deserunt tempora! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum reiciendis culpa nisi,
                        assumenda exercitationem aliquid sapiente provident
                        tempore deserunt tempora!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-3">
                <div className=" p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg">
                  <h3 className="text-[#06BBCC]">Message from head master</h3>

                  <div className="flex mt-3">
                    <div className="w-[150px]">
                      <div className="h-[150px] w-[150px]">
                        <img
                          className="w-full h-full object-contain"
                          src="/uploads/1676365597171default-avatar.png"
                          alt="avatar"
                        />
                      </div>
                      <div className="mt-2">
                        <h6 className="text-sm">MD. ABDUR RASHID</h6>
                        <h6 className="text-sm">Head Master</h6>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum reiciendis culpa nisi, assumenda
                        exercitationem aliquid sapiente provident tempore
                        deserunt tempora! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum reiciendis culpa nisi,
                        assumenda exercitationem aliquid sapiente provident
                        tempore deserunt tempora!
                      </p>
                    </div>
                  </div>
                </div>
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

      <div class="notices-area pt-[100px]">
        <div class="bootstrap-container">
          <div class="container">
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
      </div>

      <div class="counter-area pt-[100px]">
        <div class="bootstrap-container">
          <div class="container">
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
      </div>
    </Layout>
  );
}
