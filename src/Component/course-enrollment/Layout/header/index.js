import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppstoreOutlined } from "@ant-design/icons";
export default function Header() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userAccessToken");
    localStorage.removeItem("userLogedinData");

    navigate("/user-auth");
  };
  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="menubar-logo">
                  <Link to="/">
                    <AppstoreOutlined
                      style={{ fontSize: "35px", color: "#06BBCC" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="menubar-content">
                  <ul>
                    <Link to="/">
                      {" "}
                      <li role="button">Home</li>{" "}
                    </Link>
                    <Link to="/skill-test">
                      <li role="button">Skill test</li>
                    </Link>
                    <Link to="/tutorials">
                      <li role="button">Tutorials</li>
                    </Link>

                    <li role="button"></li>
                    <Link to="/user-auth">
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
