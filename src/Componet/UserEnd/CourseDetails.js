import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import {
  CheckOutlined,
  DownOutlined,
  UpOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { Link } from "react-router-dom";
export default function CourseDetails() {
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [showCourseContentOne, setShowCourseContentOne] = useState(false);
  const [showCourseContentTwo, setShowCourseContentTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log("offset", offset);
    if (offset > 1050) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleShow = (value) => {
    if (value === "course-details-one") {
      if (showCourseDetails === true) {
        setShowCourseDetails(false);
      }
      if (showCourseDetails === false) {
        setShowCourseDetails(true);
      }
    }

    if (value === "course-content-one") {
      if (showCourseContentOne === true) {
        setShowCourseContentOne(false);
      }
      if (showCourseContentOne === false) {
        setShowCourseContentOne(true);
      }
    }
    if (value === "course-content-two") {
      if (showCourseContentTwo === true) {
        setShowCourseContentTwo(false);
      }
      if (showCourseContentTwo === false) {
        setShowCourseContentTwo(true);
      }
    }
  };

  const handleEditOk = () => {
    setIsModalOpen(false);
  };

  const handleModalShow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <div class="course-details-area">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="w-100  bg-white rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      <h2>IELTS Course by Munzereen Shahid</h2>
                    </div>
                    <p class="text-gray-700 text-base">
                      Improve your IELTS reading, writing, listening and
                      speaking test scores. Our fully-guided IELTS preparation
                      course will help you get your best IELTS band score. 15
                      mock tests included.
                    </p>
                    <h6 className="mt-5">কোর্স ইন্সট্রাক্টর</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="instructor-wrapper">
                        <div className="image-wrapper">
                          <img src="/uploads/munzerin-instructor.webp" alt="" />
                        </div>
                        <div className="mx-3">
                          <p>Munzereen Shahid</p>
                          <p>MSc (English), University of Oxford (UK);</p>

                          <p>BA, MA (English), University of Dhaka;</p>
                          <p>IELTS: 8.5</p>
                        </div>
                      </div>
                    </div>
                    <h6 className="mt-5">কোর্সটি করে যা শিখবেন</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            Detailed rules and regulations of each module of the
                            IELTS test
                          </p>
                        </div>
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            Proper structure and essay type for scoring well in
                            IELTS writing task 1 and 2
                          </p>
                        </div>
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            Time management strategy to get a good band score in
                            the IELTS test
                          </p>
                        </div>
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            Formats and strategies to ace the IELTS test
                          </p>
                        </div>
                      </div>
                    </div>
                    <h6 className="mt-5">কোর্স সম্পর্কে বিস্তারিত</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div
                          role="button"
                          onClick={() => handleShow("course-details-one")}
                          className="course-learning-curb-content-for-details"
                        >
                          <p className="mt-2 mx-2">
                            Who is this IELTS course for?
                          </p>
                          <div>
                            {showCourseDetails ? (
                              <UpOutlined />
                            ) : (
                              <>
                                <DownOutlined />
                              </>
                            )}
                          </div>
                        </div>
                        {showCourseDetails && (
                          <p className="mx-2 mt-2">
                            IELTS certificates are accepted in different higher
                            education institutions in the USA and other
                            English-speaking countries across South America and
                            Europe. This exam tests the ability of the
                            candidates to speak, read, listen and write in
                            English. Many of us are intimidated by English
                            grammar as English is not our first language.
                            Fortunately, IELTS is essentially a language-based
                            test and not grammar-based. To achieve the desired
                            score, you will require four English language
                            skills: reading, writing, listening & understanding
                            and speaking. The more proficient a person is in
                            these four areas, the higher their score will be on
                            the IELTS test. To help IELTS examinees improve
                            these four essential English language skills, 10
                            Minute School has brought a detailed and well-guided
                            IELTS preparation course. The instructor of this
                            course is Munzereen Shahid (IELTS Band Score 8.5/
                            9), who has recently graduated from the English
                            Department of the world-renowned Oxford University
                            in England. To make your IELTS test preparation
                            effortless, efficient, and practical, enroll in
                            "IELTS Course by Munzereen Shahid" today and take
                            yourself one step closer to fulfilling your dreams.
                          </p>
                        )}
                      </div>
                    </div>
                    <h6 className="mt-5">কন্টেন্ট প্রিভিউ</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div
                          role="button"
                          onClick={() => handleShow("course-content-one")}
                          className="course-learning-curb-content-for-details"
                        >
                          <p className="mt-2 mx-2">Introduction</p>
                          <div>
                            {showCourseContentOne ? (
                              <UpOutlined />
                            ) : (
                              <>
                                <DownOutlined />
                              </>
                            )}
                          </div>
                        </div>
                        {showCourseContentOne && (
                          <div className="mt-2 mx-2">
                            <div
                              onClick={handleModalShow}
                              className="course-specific-video-wrapper"
                            >
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                            <div className="course-specific-video-wrapper">
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                            <div className="course-specific-video-wrapper">
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                          </div>
                        )}
                        <div
                          role="button"
                          onClick={() => handleShow("course-content-two")}
                          className="course-learning-curb-content-for-details"
                        >
                          <p className="mt-2 mx-2">Academic Reading</p>
                          <div>
                            {showCourseContentTwo ? (
                              <UpOutlined />
                            ) : (
                              <>
                                <DownOutlined />
                              </>
                            )}
                          </div>
                        </div>

                        {showCourseContentTwo && (
                          <div className="mt-2 mx-2">
                            <div className="course-specific-video-wrapper">
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                            <div className="course-specific-video-wrapper">
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                            <div className="course-specific-video-wrapper">
                              <div>
                                <PlayCircleOutlined
                                  style={{ color: "#15803D" }}
                                />
                              </div>
                              <p className="mx-2 mt-1">
                                Video-01: IELTS: Introduction
                              </p>
                              <p className=" mt-1 text-primary">Free watch</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <h6 className="mt-5">যেভাবে পেমেন্ট করবেন</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
                            <a className="text-primary" href="www.youtube.com">
                              এই ভিডিওটি দেখুন
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <h6 className="mt-5">ক্লাস করার জন্য প্রয়োজন হবে</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">
                            ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)
                          </p>
                        </div>
                        <div className="course-learning-curb-content">
                          <div>
                            <CheckOutlined />
                          </div>
                          <p className="mt-2 mx-2">স্মার্টফোন অথবা পিসি</p>
                        </div>
                      </div>
                    </div>

                    <h6 className="mt-5">সচরাচর জিজ্ঞাসা</h6>
                    <div class="rounded-md border mt-2  border-slate-300">
                      <div className="course-learning-curb">
                        <div
                          role="button"
                          onClick={handleShow}
                          className="course-learning-curb-content-for-details"
                        >
                          <p className="mt-2 mx-2">How can I buy a course?</p>
                          <div>
                            {true ? (
                              <UpOutlined />
                            ) : (
                              <>
                                <DownOutlined />
                              </>
                            )}
                          </div>
                        </div>
                        {true && (
                          <p className="mx-2 mt-2">
                            Detailed rules and regulations of each module of the
                            IELTS testDetailed rules and regulations of each
                            module of the IELTS test
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  className={
                    scrolled
                      ? " max-w-sm bg-white rounded overflow-hidden shadow-lg "
                      : "enroll-area max-w-sm bg-white rounded overflow-hidden shadow-lg"
                  }
                >
                  <img
                    class="w-full"
                    src="/uploads/women-2.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class=" text-xl mb-2">
                      <h4>IELTS Course by Munzereen Shahid</h4>
                    </div>
                    <p class="text-gray-700 text-base">
                      লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন এক্সপেরিয়েন্স।
                    </p>
                    <div className="course-card-price-wparrer pt-3">
                      <div>5000 taka</div>
                    </div>
                    <div className="mt-3">
                      <Link to="/course-checkout">
                        <button class="bg-green-500 w-100 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                          Enroll
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Introduction"
          open={isModalOpen}
          onCancel={handleCancel}
          width={600}
          footer={false}
        >
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/30y-wlDtIIQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
