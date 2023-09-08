import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Component/Authentication";
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
import StudentRegistration from "../Component/Deshboard/StudentManagement/studentRegistration";
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
import TeacherListWebView from "../Component/UserEnd/administration/teacher-list-web-view";
import Contact from "../Component/UserEnd/contact";
import Notices from "../Component/UserEnd/notices";
import SpeechManagement from "../Component/Deshboard/WebsiteManagement/SpeechManagement";
import FacilitesManagement from "../Component/Deshboard/WebsiteManagement/FacilitiesManagement";
import NoticesManagement from "../Component/Deshboard/WebsiteManagement/NoticesManagement";
import MissionVissionManagement from "../Component/Deshboard/WebsiteManagement/MissionVissionManagement";
import ImageGalleryManagement from "../Component/Deshboard/WebsiteManagement/ImageGalleryManagement";
import VideoGalleryManagement from "../Component/Deshboard/WebsiteManagement/VideoGalleryManagement";

const RoutesMain = () => {
  return (
    <div>
      <Routes>
        {/* Course Public Route Start */}
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/course-checkout/:id" element={<CheckOut />} />
        <Route path="/skill-test" element={<SkillTest />} />
        <Route path="/tutorials" element={<Tutorials />} />
        {/*Course Public Route End */}

        {/* Userend Public Route Start */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Auth />} />
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
        {/*Userend Public Route End */}

        {/* Userend Private Route start */}
        <Route
          path="/course-access"
          element={
            <UserPrivateRoute>
              <CourseAccess />
            </UserPrivateRoute>
          }
        />
        <Route
          path="/student-profile"
          element={
            <UserPrivateRoute>
              <StudentProfile />
            </UserPrivateRoute>
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
        {/* Userend Private Route end */}

        {/* Deshboard Private Route Start */}
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
          path="/student-registration"
          element={
            <PrivateRoute>
              <StudentRegistration />
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
          path="/slide-manage"
          element={
            <PrivateRoute>
              <SlideManagement />
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
          path="/speech-manage"
          element={
            <PrivateRoute>
              <SpeechManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/facilites-manage"
          element={
            <PrivateRoute>
              <FacilitesManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/notices-manage"
          element={
            <PrivateRoute>
              <NoticesManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/mission-vission-manage"
          element={
            <PrivateRoute>
              <MissionVissionManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/image-gallery-manage"
          element={
            <PrivateRoute>
              <ImageGalleryManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/video-gallery-manage"
          element={
            <PrivateRoute>
              <VideoGalleryManagement />
            </PrivateRoute>
          }
        />
        {/* Deshboard Private Route End */}
      </Routes>
    </div>
  );
};

export default RoutesMain;
