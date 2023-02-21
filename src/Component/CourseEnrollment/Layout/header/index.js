import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("logedinData");

    navigate("/");
  };
  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="menubar-logo">
                  <Link to="/home">
                    <img src="/uploads/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="menubar-content">
                  <ul>
                    <Link to="/home">
                      {" "}
                      <li role="button">Home</li>{" "}
                    </Link>
                    <Link to="/course-access">
                      <li role="button">Course Access</li>
                    </Link>
                    <Link to="/course-deshboard">
                      <li role="button">Deshboard</li>
                    </Link>
                    <Link to="/lider-board">
                      <li role="button">Liderboard</li>
                    </Link>

                    <li role="button"></li>
                    <Link to="/course-login">
                      <li onClick={handleLogOut} role="button">
                        Log out
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
