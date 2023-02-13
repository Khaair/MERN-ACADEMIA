import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditForm from "./Component/Deshboard/EditForm";
import Deshboard from "./Component/Deshboard/Deshboard";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import StudentAdd from "./Component/Deshboard/StudentAdd";
import PrivateRoute from "./Component/Authentication/PrivateRoute";
import TecherManagement from "./Component/Deshboard/TeacherManagement";
import { QueryClient, QueryClientProvider } from "react-query";
import "./tailwind.css";
import CourseDetails from "./Component/UserEnd/CourseDetails";
import { Bars } from "react-loader-spinner";
import CheckOut from "./Component/UserEnd/CheckOut";
import CourseManagement from "./Component/Deshboard/CourseManagement";
import OrderManage from "./Component/Deshboard/OrderManage";
const Home = React.lazy(() => import("./Component/UserEnd/Home"));
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
                <Home />
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

          <Route
            path="/order-manage"
            element={
              <PrivateRoute>
                <OrderManage />
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
