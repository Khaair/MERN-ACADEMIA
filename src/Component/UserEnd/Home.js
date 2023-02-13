import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import Layout from "./Layout";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/api/course/course-show"
    );
    return response.json();
  };
  const { data, status } = useQuery("data", fetchData, {
    refetchOnWindowFocus: true,
  });

  console.log("datadatadata", data);

  return (
    <Layout>
      <div className="navbar-and-banner-area">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content-wrapper">
                  <div className="banner-content-title">
                    <h1> Learn as if you </h1>
                    <h1>were not reaching </h1>
                    <h1>your goal and as though</h1>
                    <h1>you were scared of missing it!</h1>

                    <h3 className="mt-2">25% Off On All Tops</h3>
                  </div>
                  <div className="banner-btn-wrapper">
                    <Link to="/course-details">
                      <button className="first-banner-btn">Enroll Now</button>
                    </Link>
                    <button>Find More</button>
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
                <h2>আমাদের চলমান কোর্স সমূহ</h2>
                <p>আপনার গোল সেট করে শুরু করুন আপনার ক্যারিয়ার গ্রোথ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="e-com-product-show-area e-com-section-padding">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div
                  style={{
                    backgroundImage: `url("/uploads/course-category-01.webp")`,
                  }}
                  className="product-card-area  "
                >
                  <h2>20% Off On MERN Stack</h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <Link to="/course-details">
                      <button>SEE DETAILS</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  style={{
                    backgroundImage: `url("/uploads/course-category-02.webp")`,
                  }}
                  className="product-card-area"
                >
                  <h2>20% Off On </h2>
                  <h2>Business </h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <button>SEE DETAILS</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  style={{
                    backgroundImage: `url("/uploads/course-category-03.webp")`,
                  }}
                  className="product-card-area"
                >
                  <h2>20% Off On Design</h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <button>SEE DETAILS</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  style={{
                    backgroundImage: `url("/uploads/course-category-04.webp")`,
                  }}
                  className="product-card-area "
                >
                  <h2>20% Off On Higher Study </h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <button>SEE DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-product-title-area mb-5">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Featured Courses</h2>

                <span className="featured-product-span" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LazyLoad height={200}>
        <div className="feature-all-product-wrapper ">
          <div className="feature-product-area e-com-section-padding-small">
            <div class="bootstrap-container">
              <div className="container">
                <div className="row">
                  {data?.map((item, index) => {
                    return (
                      <div key={index} class="col-lg-3 mt-3">
                        <Link to={`/course-details/${item?._id}`}>
                          <div class="max-w-sm course-card bg-white rounded overflow-hidden shadow-lg">
                            <img
                              class="w-full"
                              src={`/uploads/${item?.file}`}
                              alt="Sunset in the mountains"
                            />

                            <div class="px-6 py-4 ">
                              <div class="font-bold text-xl mb-2 course-title">
                                {item?.courseTitle}
                              </div>
                              <div className="course-sub-title">
                                <p class="text-gray-700 text-base">
                                  {item?.courseSubTitle}
                                </p>
                              </div>
                              <div className="course-card-price-wparrer pt-3">
                                <div> {item?.price}</div>
                                <div>
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    SEE DETAILS
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </Layout>
  );
}
