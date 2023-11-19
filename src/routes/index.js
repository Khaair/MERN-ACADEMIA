import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../component/authentication";
import CourseDetails from "../component/user-end/CourseDetails";
import CheckOut from "../component/user-end/CheckOut";
import SkillTest from "../component/user-end/SkillTest";
import PrivateRoute from "../component/authentication/PrivateRoute";
import CourseDeshboard from "../component/course-enrollment/CourseDeshboard";
import CourseAccess from "../component/course-enrollment/CourseAccess/CourseAccess";
import StudentProfile from "../component/course-enrollment/StudentProfile";
import Tutorials from "../component/user-end/Tutorials";
import DeshboardManagement from "../component/dashboard/DeshboardManagement";
import CourseManagement from "../component/dashboard/CourseManagement";
import OrderManage from "../component/dashboard/OrderManagement";
import ResultManagement from "../component/dashboard/ResultManagement";
import StudentManage from "../component/dashboard/StudentManagement";
import StuudentReg from "../component/dashboard/StudentManagement/student-registration";
import QuizManage from "../component/dashboard/QuizManagement";
import TecherManagement from "../component/dashboard/TeacherManagement";
import UserAuth from "../component/user-end/auth";
import UserPrivateRoute from "../component/user-end/auth/private-route";
import AboutUsManagement from "../component/dashboard/WebsiteManagement/AboutUsManagement";
import SlideManagement from "../component/dashboard/WebsiteManagement/SlideManagement";
import AboutUs from "../component/user-end/about-us";
import Mission from "../component/user-end/about-us/mission";
import Vission from "../component/user-end/about-us/vission";
import ImageGallery from "../component/user-end/gallery/image-gallery";
import VideoGallery from "../component/user-end/gallery/video-gallery";
import HeadMaster from "../component/user-end/administration/head-master";
import AssHeadMaster from "../component/user-end/administration/ass-head-master";
import TeacherListWebView from "../component/user-end/administration/teacher-list-web-view";
import Contact from "../component/user-end/contact";
import Notices from "../component/user-end/notices";
import SpeechManagement from "../component/dashboard/WebsiteManagement/SpeechManagement";
import FacilitesManagement from "../component/dashboard/WebsiteManagement/FacilitiesManagement";
import NoticesManagement from "../component/dashboard/WebsiteManagement/NoticesManagement";
import MissionVissionManagement from "../component/dashboard/WebsiteManagement/MissionVissionManagement";
import ImageGalleryManagement from "../component/dashboard/WebsiteManagement/ImageGalleryManagement";
import VideoGalleryManagement from "../component/dashboard/WebsiteManagement/VideoGalleryManagement";
import Home from "../component/user-end/home";
import ClassManagement from "../component/dashboard/ClassManagement";
import AttendanceManagement from "../component/dashboard/AttendanceManagement";
import AttendanceList from "../component/dashboard/AttendanceManagement/AttendanceList/index";

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

        {/* user-end Public Route Start */}
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
        {/*user-end Public Route End */}

        {/* user-end Private Route start */}
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
        {/* user-end Private Route end */}

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
