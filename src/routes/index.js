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
import CourseLogin from "../Component/CourseEnrollment/Login";
import StudentManage from "../Component/Deshboard/StudentManagement";
import QuizManage from "../Component/Deshboard/QuizManagement";
import TecherManagement from "../Component/Deshboard/TeacherManagement";

const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/home"
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
        <Route path="/course-login" element={<CourseLogin />} />
        <Route
          path="/course-deshboard"
          element={
            <PrivateRoute>
              <CourseDeshboard />
            </PrivateRoute>
          }
        />

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
        <Route path="/teacher-manage" element={<TecherManagement />} />
      </Routes>
    </div>
  );
};

export default RoutesMain;
