import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditForm from "./Componet/EditForm";
import Deshboard from "./Componet/Deshboard";
import Login from "./Componet/Login";
import SignUp from "./Componet/SignUp";
import StudentAdd from "./Componet/StudentAdd";
import PrivateRoute from "./Componet/PrivateRoute";
import TecherManagement from "./Componet/TeacherManagement";
import { QueryClient, QueryClientProvider } from "react-query";
import "./tailwind.css";
import CourseDetails from "./Componet/UserEnd/CourseDetails";
import { Bars } from "react-loader-spinner";
import CheckOut from "./Componet/UserEnd/CheckOut";
import CourseManagement from "./Componet/CourseManagement";
const EcomHome = React.lazy(() => import("./Componet/UserEnd/Home"));
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />} />

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
                <EcomHome />
              </Suspense>
            }
          />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/course-checkout/:id" element={<CheckOut />} />

          <Route
            path="/deshboard"
            element={
              <PrivateRoute>
                <Deshboard />
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
          <Route path="/student-manage" element={<StudentAdd />} />
          <Route path="/teacher-manage" element={<TecherManagement />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
