import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../component/Authentication";
import CourseDetails from "../component/UserEnd/CourseDetails";
import CheckOut from "../component/UserEnd/CheckOut";
import SkillTest from "../component/UserEnd/SkillTest";
import PrivateRoute from "../component/Authentication/PrivateRoute";
import CourseDeshboard from "../component/CourseEnrollment/CourseDeshboard";
import CourseAccess from "../component/CourseEnrollment/CourseAccess/CourseAccess";
import StudentProfile from "../component/CourseEnrollment/StudentProfile";
import Tutorials from "../component/UserEnd/Tutorials";
import DeshboardManagement from "../component/Deshboard/DeshboardManagement";
import CourseManagement from "../component/Deshboard/CourseManagement";
import OrderManage from "../component/Deshboard/OrderManagement";
import ResultManagement from "../component/Deshboard/ResultManagement";
import StudentManage from "../component/Deshboard/StudentManagement";
import StuudentReg from "../component/Deshboard/StudentManagement/student-registration";
import QuizManage from "../component/Deshboard/QuizManagement";
import TecherManagement from "../component/Deshboard/TeacherManagement";
import UserAuth from "../component/UserEnd/auth";
import UserPrivateRoute from "../component/UserEnd/auth/private-route";
import AboutUsManagement from "../component/Deshboard/WebsiteManagement/AboutUsManagement";
import SlideManagement from "../component/Deshboard/WebsiteManagement/SlideManagement";
import AboutUs from "../component/UserEnd/about-us";
import Mission from "../component/UserEnd/about-us/mission";
import Vission from "../component/UserEnd/about-us/vission";
import ImageGallery from "../component/UserEnd/gallery/image-gallery";
import VideoGallery from "../component/UserEnd/gallery/video-gallery";
import HeadMaster from "../component/UserEnd/administration/head-master";
import AssHeadMaster from "../component/UserEnd/administration/ass-head-master";
import TeacherListWebView from "../component/UserEnd/administration/teacher-list-web-view";
import Contact from "../component/UserEnd/contact";
import Notices from "../component/UserEnd/notices";
import SpeechManagement from "../component/Deshboard/WebsiteManagement/SpeechManagement";
import FacilitesManagement from "../component/Deshboard/WebsiteManagement/FacilitiesManagement";
import NoticesManagement from "../component/Deshboard/WebsiteManagement/NoticesManagement";
import MissionVissionManagement from "../component/Deshboard/WebsiteManagement/MissionVissionManagement";
import ImageGalleryManagement from "../component/Deshboard/WebsiteManagement/ImageGalleryManagement";
import VideoGalleryManagement from "../component/Deshboard/WebsiteManagement/VideoGalleryManagement";
import Home from "../component/UserEnd/home";
import ClassManagement from "../component/Deshboard/ClassManagement";
import AttendanceManagement from "../component/Deshboard/AttendanceManagement";
import AttendanceList from "../component/Deshboard/AttendanceManagement/list";

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
          path="/teacher-manage"
          element={
            <PrivateRoute>
              <TecherManagement />
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
              <StuudentReg />
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
        <Route
          path="/class-manage"
          element={
            <PrivateRoute>
              <ClassManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/attendance-manage"
          element={
            <PrivateRoute>
              <AttendanceManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/attendance-list"
          element={
            <PrivateRoute>
              <AttendanceList />
            </PrivateRoute>
          }
        />
        {/* Deshboard Private Route End */}
      </Routes>
    </div>
  );
};

export default RoutesMain;
