import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Component/Authentication";
import EditForm from "../Component/Deshboard/EditForm";
import SignUp from "../Component/Authentication/SignUp";
import { Bars } from "react-loader-spinner";
import Home from "../Component/UserEnd/Home";
import CourseDetails from "../Component/UserEnd/CourseDetails";
import CheckOut from "../Component/UserEnd/CheckOut";
import SkillTest from "../Component/UserEnd/SkillTest";
import PrivateRoute from "../Component/Authentication/PrivateRoute";
import CourseDeshboard from "../Component/CourseEnrollment/CourseDeshboard";
import CourseAccess from "../Component/CourseEnrollment/CourseAccess/CourseAccess";
import StudentProfile from "../Component/CourseEnrollment/StudentProfile";
import Tutorials from "../Component/UserEnd/Tutorials";
import DeshboardManagement from "../Component/Deshboard/DeshboardManagement";
import CourseManagement from "../Component/Deshboard/CourseManagement";
import OrderManage from "../Component/Deshboard/OrderManagement";
import ResultManagement from "../Component/Deshboard/ResultManagement";
import StudentManage from "../Component/Deshboard/StudentManagement";
import QuizManage from "../Component/Deshboard/QuizManagement";
import TecherManagement from "../Component/Deshboard/TeacherManagement";
import UserAuth from "../Component/UserEnd/auth";
import UserPrivateRoute from "../Component/UserEnd/auth/private-route";
import AboutUsManagement from "../Component/Deshboard/WebsiteManagement/AboutUsManagement";
import SlideManagement from "../Component/Deshboard/WebsiteManagement/SlideManagement";

import AboutUs from "../Component/UserEnd/about-us";
import Mission from "../Component/UserEnd/about-us/mission";
import Vission from "../Component/UserEnd/about-us/vission";
import ImageGallery from "../Component/UserEnd/gallery/image-gallery";
import VideoGallery from "../Component/UserEnd/gallery/video-gallery";
import HeadMaster from "../Component/UserEnd/administration/head-master";
import AssHeadMaster from "../Component/UserEnd/administration/ass-head-master";
import TeacherList from "../Component/Deshboard/TeacherManagement/list";
import TeacherListWebView from "../Component/UserEnd/administration/teacher-list-web-view";
import Contact from "../Component/UserEnd/contact";
import Notices from "../Component/UserEnd/notices";

const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Auth />} />

        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="ecommerce-loader-wrapper">
                  <Bars
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/course-checkout/:id" element={<CheckOut />} />
        <Route path="/skill-test" element={<SkillTest />} />
        {/* <Route path="/course-login" element={<CourseLogin />} /> */}

        <Route
          path="/course-access"
          element={
            <PrivateRoute>
              <CourseAccess />
            </PrivateRoute>
          }
        />
        <Route
          path="/student-profile"
          element={
            <PrivateRoute>
              <StudentProfile />
            </PrivateRoute>
          }
        />

        <Route path="/tutorials" element={<Tutorials />} />
        <Route
          path="/deshboard"
          element={
            <PrivateRoute>
              <DeshboardManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/student-manage"
          element={
            <PrivateRoute>
              <StudentManage />
            </PrivateRoute>
          }
        />
        <Route
          path="/course-manage"
          element={
            <PrivateRoute>
              <CourseManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-manage"
          element={
            <PrivateRoute>
              <OrderManage />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz-manage"
          element={
            <PrivateRoute>
              <QuizManage />
            </PrivateRoute>
          }
        />
        <Route
          path="/result-manage"
          element={
            <PrivateRoute>
              <ResultManagement />
            </PrivateRoute>
          }
        />

        <Route
          path="/about-us-manage"
          element={
            <PrivateRoute>
              <AboutUsManagement />
            </PrivateRoute>
          }
        />

        <Route
          path="/slide-manage"
          element={
            <PrivateRoute>
              <SlideManagement />
            </PrivateRoute>
          }
        />

        <Route
          path="/course-deshboard"
          element={
            <UserPrivateRoute>
              <CourseDeshboard />
            </UserPrivateRoute>
          }
        />

        <Route path="/user-auth" element={<UserAuth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vission" element={<Vission />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />

        <Route path="/head-master-speech" element={<HeadMaster />} />
        <Route path="/ass-head-master-speech" element={<AssHeadMaster />} />
        <Route path="/teacher-list-show" element={<TeacherListWebView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notices" element={<Notices />} />

        <Route path="/teacher-manage" element={<TecherManagement />} />
      </Routes>
    </div>
  );
};

export default RoutesMain;
