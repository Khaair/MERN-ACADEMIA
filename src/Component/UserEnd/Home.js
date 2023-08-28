import React from "react";
import CountUp from "react-countup";
import { useQuery } from "react-query";
import { CloudDownloadOutlined } from "@ant-design/icons";

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

      <div class="career-goal-title-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2>Welcome to Sherpur govt college</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="e-com-product-show-area">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div class="col-lg-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                  voluptate beatae laudantium asperiores corporis consequuntur
                  accusantium voluptates maiores animi sunt! Nesciunt, ex eius
                  quidem quaerat quam quia fuga numquam quae amet repudiandae at
                  sit blanditiis facere optio itaque sapiente dolores alias et
                  inventore. Repellat, quis similique laborum ratione, eos
                  beatae voluptates aspernatur quos esse iusto praesentium
                  mollitia laudantium, distinctio accusantium reiciendis odit!
                  Perferendis nemo a ab iste, vitae odio, aliquid magnam aliquam
                  ad corporis magni possimus minima praesentium voluptates ullam
                  officiis. Sint esse nihil veritatis, voluptatibus culpa
                  repellendus odit dicta facilis neque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="principal-and-assistent-princpal-message-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div className=" p-4 w-full course-card bg-white rounded overflow-hidden shadow-lg">
                  <h3>Message from head master</h3>

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
              <div class="col-lg-6">
                <div className=" p-4 w-full course-card bg-white rounded overflow-hidden shadow-lg">
                  <h3>Message from head master</h3>

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

      <div class="career-goal-title-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2>Notices</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="notices-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-2">
                <div className="flex bg-[navy]  p-3">
                  <div className="bg-[white] p-2 text-black w-[70px]">
                    <p> 28 Mar</p>
                  </div>
                  <div className="ml-3 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div class="ml-3 text-white">
                    <CloudDownloadOutlined />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-2">
                <div className="flex bg-[navy]  p-3">
                  <div className="bg-[white] p-2 text-black w-[70px]">
                    <p> 28 Mar</p>
                  </div>
                  <div className="ml-3 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div class="ml-3 text-white">
                    <CloudDownloadOutlined />
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mb-2">
                <div className="flex bg-[navy]  p-3">
                  <div className="bg-[white] p-2 text-black w-[70px]">
                    <p> 28 Mar</p>
                  </div>
                  <div className="ml-3 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div class="ml-3 text-white">
                    <CloudDownloadOutlined />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-2">
                <div className="flex bg-[navy]  p-3">
                  <div className="bg-[white] p-2 text-black w-[70px]">
                    <p> 28 Mar</p>
                  </div>
                  <div className="ml-3 text-white">
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

      <div class="counter-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div className="bg-[navy] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={500} duration={5} separator="," />
                    <h4>Teachers</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div className="bg-[navy] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={500} duration={5} separator="," />
                    <h4>Students</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div className="bg-[navy] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={500} duration={5} separator="," />
                    <h4>Stuffs</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div className="bg-[navy] h-[100px] text-white rounded overflow-hidden shadow-l flex justify-center text-center items-center">
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={500} duration={5} separator="," />
                    <h4>Class Rooms</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930221.8159380344!2d89.52504414978591!3d24.3924688675575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d61689bedad9%3A0x1503d6a7e692f867!2zU2hlcnB1ciBHb3Z0LiBDb2xsZWdlICjgprbgp4fgprDgpqrgp4HgprAg4Ka44Kaw4KaV4Ka-4Kaw4Ka_IOCmleCmsuCnh-CmnCk!5e0!3m2!1sen!2sbd!4v1693221536707!5m2!1sen!2sbd"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
