import React, { useState } from "react";
import Layout from "../Layout";
import RelatedQuiz from "./RelatededQuiz";

import {
  DownOutlined,
  UpOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";

export default function CourseAccess() {
  const [showCourseContentOne, setShowCourseContentOne] = useState(false);
  const [showCourseContentTwo, setShowCourseContentTwo] = useState(false);
  const [videoOne, setVideoOne] = useState(true);
  const [videoTwo, setVideoTwo] = useState(false);

  const { TabPane } = Tabs;

  const handleShow = (value) => {
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

  const handleVideoShow = (value) => {
    if (value === "video-01") {
      setVideoOne(true);
      setVideoTwo(false);
    }
    if (value === "video-02") {
      setVideoTwo(true);
      setVideoOne(false);
    }
  };

  const [size, setSize] = useState("small");
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Layout>
      <div class="course-access-area">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="card shadow-sm">
                  {videoOne && (
                    <div>
                      <iframe
                        width="750"
                        height="450"
                        src="https://www.youtube.com/embed/30y-wlDtIIQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
                  {videoTwo && (
                    <div>
                      <iframe
                        width="810"
                        height="450"
                        src="https://www.youtube.com/embed/QBz8FX4GE_w"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}

                  <div className="mt-2">
                    <Tabs>
                      <TabPane tab="Descriptions" key="1">
                        <div className="tabpane-inner-content-wrapper">
                          <div className="product-full-description">
                            <div className="container-fluid no-padding">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="product-full-description-inner-content">
                                    In order to get an 8 band score in listening
                                    and reading you need to get 89% of the
                                    marks. Since IELTS reading and listening
                                    have 40 questions each, in order to get band
                                    8 you have to at least answer 36 questions
                                    of each.In order to get an 8 band score in
                                    listening and reading you need to get 89% of
                                    the marks. Since IELTS reading and listening
                                    have 40 questions each, in order to get band
                                    8 you have to at least answer 36 questions
                                    of each.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tab="Related Quiz" key="2">
                        <RelatedQuiz />
                      </TabPane>
                      <TabPane tab="Review" key="3">
                        Review
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card shadow-sm">
                  {" "}
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
                          role="button"
                          className="course-specific-video-wrapper"
                        >
                          <div>
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>
                          <p
                            onClick={() => handleVideoShow("video-01")}
                            className="mx-2 mt-1"
                          >
                            Video-01: IELTS: Introduction
                          </p>
                        </div>
                        <div
                          role="button"
                          className="course-specific-video-wrapper"
                        >
                          <div>
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>

                          <p
                            onClick={() => handleVideoShow("video-02")}
                            className="mx-2 mt-1"
                          >
                            Video-02: IELTS: Reading skill 01
                          </p>
                        </div>
                        <div
                          role="button"
                          className="course-specific-video-wrapper"
                        >
                          <div>
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>
                          <p className="mx-2 mt-1">
                            Video-03: IELTS: Reading skill 02
                          </p>
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
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>
                          <p className="mx-2 mt-1">
                            Video-01: IELTS: Introduction
                          </p>
                        </div>
                        <div className="course-specific-video-wrapper">
                          <div>
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>
                          <p className="mx-2 mt-1">
                            Video-01: IELTS: Introduction
                          </p>
                        </div>
                        <div className="course-specific-video-wrapper">
                          <div>
                            <PlayCircleOutlined style={{ color: "#15803D" }} />
                          </div>
                          <p className="mx-2 mt-1">
                            Video-01: IELTS: Introduction
                          </p>
                        </div>
                      </div>
                    )}
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
