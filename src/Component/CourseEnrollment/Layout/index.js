import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import {
  UserOutlined,
  FullscreenExitOutlined,
  DiffOutlined,
  PieChartOutlined,
  SlackOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  QrcodeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import Search from "antd/es/transfer/search";

const dropdownMenu = (
  <Menu>
    <Link to="/teacher-manage">
      <Menu.Item key="1">Dropdown Item 1</Menu.Item>
    </Link>
    <Menu.Item key="2">Dropdown Item 2</Menu.Item>
    <Menu.Item key="3">Dropdown Item 3</Menu.Item>
  </Menu>
);

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const StudentDeshboardLayout = ({ children }) => {
  const [getColorStudentManage, setColorStudentManage] = useState();
  const [getColorCourseManage, setColorCourseManage] = useState();
  const [getColorOrderManage, setColorOrderManage] = useState();
  const [getColorResultManage, setColorResultManage] = useState();
  const [getColorQuizManage, setColorQuizManage] = useState();
  const [getColorDeshboardManage, setColorDeshboardManage] = useState();
  const [getColorTeacherManage, setColorTeacherdManage] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("userAccessToken");
    localStorage.removeItem("userLogedinData");

    navigate("/user-auth");
  };

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    if (location?.pathname === "/student-manage") {
      setColorStudentManage(true);
    }
    if (location?.pathname === "/course-manage") {
      setColorCourseManage(true);
    }

    if (location?.pathname === "/order-manage") {
      setColorOrderManage(true);
    }
    if (location?.pathname === "/result-manage") {
      setColorResultManage(true);
    }
    if (location?.pathname === "/quiz-manage") {
      setColorQuizManage(true);
    }
    if (location?.pathname === "/deshboard") {
      setColorDeshboardManage(true);
    }
    if (location?.pathname === "/teacher-manage") {
      setColorTeacherdManage(true);
    }
  }, [location?.pathname]);

  return (
    <React.Fragment>
      <div class="layer-area">
        <div class="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="nabar-area">
                <nav className="user-deshboard-navv">
                  <div className="top-navbar-wrapper">
                    <div className="accademia-logo">
                      <Link to="/">
                        <img src="/uploads/logo.png" alt="" />
                      </Link>
                    </div>

                    <div>
                      <ul>
                        <Link to="/">
                          {" "}
                          <li className="text-dark fw-bold" role="button">
                            Home
                          </li>{" "}
                        </Link>

                        <Link to="/">
                          <li className="text-dark fw-bold" role="button">
                            About
                          </li>
                        </Link>
                        <Link to="/">
                          <li className="text-dark fw-bold" role="button">
                            Contact
                          </li>
                        </Link>
                      </ul>
                    </div>

                    <div className="searchbar-wrapper">
                      <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        style={{
                          width: 200,
                        }}
                      />
                    </div>

                    <div className="top-nav-right-icon d-flex">
                      <div className="title-deshboard-wrapper-icon">
                        <BellOutlined role="button" />
                      </div>
                      <div className="title-deshboard-wrapper-icon">
                        {" "}
                        <QrcodeOutlined role="button" />
                      </div>
                      <div className="title-deshboard-wrapper-icon">
                        {" "}
                        <LogoutOutlined onClick={handleLogOut} />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="sub-nabar-area shadow-sm ">
                <nav className="navv">
                  <Link to="/">
                    <div className="title-deshboard-wrapper text-center text-bold">
                      <div className="title-deshboard-wrapper-icon">
                        {" "}
                        <QrcodeOutlined role="button" />
                      </div>
                      <div className="deshboar-word">Ostad</div>
                    </div>
                  </Link>
                </nav>
              </div>

              <div class="sidebar-area">
                <div class="row">
                  <div class="col-lg-2 deshboard-sidebar">
                    <div className="mt-3">
                      <ul>
                        <li>
                          <Link
                            to="/student-profile"
                            className={
                              getColorDeshboardManage
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <UsergroupAddOutlined />
                            <Space
                              className={
                                getColorDeshboardManage
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Profile
                              Section&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/course-deshboard"
                            className={
                              getColorDeshboardManage
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <UsergroupAddOutlined />
                            <Space
                              className={
                                getColorDeshboardManage
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Course
                              Deshboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Space>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            className={
                              getColorTeacherManage
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                            to="/course-access"
                          >
                            <UserOutlined />
                            <Space
                              className={
                                getColorTeacherManage
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Course
                              Access&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Space>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            className={
                              getColorTeacherManage
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                            to="/skill-test"
                          >
                            <UserOutlined />
                            <Space
                              className={
                                getColorTeacherManage
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Skill Test
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Space>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            className={
                              getColorTeacherManage
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                            to="/skill-test"
                          >
                            <UserOutlined />
                            <Space
                              className={
                                getColorTeacherManage
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Resources
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Space>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-10  user-children-deshboard">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentDeshboardLayout;
