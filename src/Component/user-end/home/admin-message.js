import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AdminMessage = () => {
  return (
    <div class="principal-and-assistent-princpal-message-area bg-[white] pt-[100px]">
      <div class="bootstrap-container">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="400"
              className="p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg"
            >
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
                    every member of our school community. At this school, we are
                    committed to providing the highest quality education and
                    fostering an environment of growth, learning, thinking
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
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              className=" p-4 w-full course-card bg-[#f0fbfc] rounded overflow-hidden shadow-lg"
            >
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
                    every member of our school community. At this school, we are
                    committed to providing the highest quality education and
                    fostering an environment of growth, learning, thinking
                    positive and character development.{" "}
                    <Link to="/ass-head-master-speech" className="text-primary">
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
  );
};

export default AdminMessage;
