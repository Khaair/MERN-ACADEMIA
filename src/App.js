import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditForm from "./Componet/EditForm";
import Deshboard from "./Componet/Deshboard";
import Login from "./Componet/Login";
import SignUp from "./Componet/SignUp";
import StudentAdd from "./Componet/StudentAdd";
import PrivateRoute from "./Componet/PrivateRoute";

function App() {
  const [data, setData] = useState([]);

  const FetchData = (values) => {
    setData([...data, values]);
  };

  const Delete = (id) => {
    //[{23},{45},{65}]-->2
    let deletedData = data.filter((eld, indd) => indd !== id);
    setData(deletedData);
  };
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <Routes>
              <Route path="/" element={<Login />} />

              <Route
                path="/edit/:id"
                element={<EditForm fetch={FetchData} />}
              />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/deshboard"
                element={
                  <PrivateRoute>
                    <Deshboard datas={data} DeleteFn={Delete} />
                  </PrivateRoute>
                }
              />
              <Route path="/student-manage" element={<StudentAdd />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
