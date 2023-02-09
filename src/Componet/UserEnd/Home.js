import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function EcomHome() {
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
                    <button className="first-banner-btn">Enroll Now</button>
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
                <div className="product-card-area course-background-img-one ">
                  <h2>20% Off On JavaScript </h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <Link to="/course-details">
                      <button>SEE DETAILS</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-card-area course-background-img-two">
                  <h2>20% Off On ReactJS</h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <button>SEE DETAILS</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-card-area course-background-img-three">
                  <h2>20% Off On NodeJS</h2>
                  <p>Lorem ipsum dolor sit amet consec tetur.</p>
                  <div className="product-card-btn-wrapper">
                    <button>SEE DETAILS</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-card-area course-background-img-four ">
                  <h2>20% Off On ExpressJS</h2>
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
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/mern-rabbil-hasan.jpg"
                        alt="Sunset in the mountains"
                      />

                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <Link to="/course-details">
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                SEE DETAILS
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/data-science.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/mern-rabbil-hasan.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/data-science.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/data-science.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/business-ai.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/data-science.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/women-uddokta.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/power-bi.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/accounting.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/women-2.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="/uploads/mern-rabbil-hasan.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          Full Stack Web Development with MERN
                        </div>
                        <p class="text-gray-700 text-base">
                          লাইভে রিয়েল লাইফ প্রোজেক্ট করে হ্যান্ডস অন
                          এক্সপেরিয়েন্স।
                        </p>
                        <div className="course-card-price-wparrer pt-3">
                          <div>5000 taka</div>
                          <div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </Layout>
  );
}
