import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  UserOutlined,
  BorderInnerOutlined,
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
import { Button, Dropdown, Space } from "antd";
import Search from "antd/es/transfer/search";
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

const Layout = ({ children }) => {
  const [getColorDeshboard, setColorDeshboard] = useState();
  const [getColorCourseManage, setColorCourseManage] = useState();
  const [getColorTeacherManage, setColorTeacherManage] = useState();
  const [getColorOrderManage, setColorOrderManage] = useState();
  const [getColorResultManage, setColorResultManage] = useState();
  const [getColorQuizManage, setColorQuizManage] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("logedinData");

    navigate("/");
  };

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    if (location?.pathname === "/deshboard") {
      setColorDeshboard(true);
    }
    if (location?.pathname === "/course-manage") {
      setColorCourseManage(true);
    }
    if (location?.pathname === "/teacher-manage") {
      setColorTeacherManage(true);
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
  }, []);

  return (
    <React.Fragment>
      <div class="layer-area">
        <div className="row">
          <div className="nabar-area">
            <nav className="navv">
              <div className="top-navbar-wrapper">
                <div className="accademia-logo">
                  <Link to="/home">
                    {" "}
                    <img src="/uploads/academia-logo-transparent.png" alt="" />
                  </Link>
                </div>

                <div>
                  <Button type="primary" ghost>
                    Blog
                  </Button>
                  <Button className="mx-2" type="primary" ghost>
                    Info
                  </Button>
                  <Button onClick={handleLogOut} type="primary" ghost>
                    Event
                  </Button>
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
              <Link to="/deshboard">
                <div className="title-deshboard-wrapper text-center text-bold">
                  <div className="title-deshboard-wrapper-icon">
                    {" "}
                    <QrcodeOutlined role="button" />
                  </div>
                  <div className="deshboar-word">Deshboard</div>
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
                        to="/deshboard"
                        className={
                          getColorDeshboard
                            ? "ll  text-primary d-flex"
                            : "ll  d-flex"
                        }
                      >
                        <UsergroupAddOutlined />
                        <Space
                          className={
                            getColorDeshboard
                              ? "mx-2  text-primary click-me"
                              : "mx-2   click-me"
                          }
                        >
                          Student Management
                        </Space>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/result-manage"
                        className={
                          getColorResultManage
                            ? "ll  text-primary d-flex"
                            : "ll  d-flex"
                        }
                      >
                        <UserOutlined />
                        <Space
                          className={
                            getColorResultManage
                              ? "mx-2  text-primary click-me"
                              : "mx-2   click-me"
                          }
                        >
                          Result Management&nbsp;&nbsp;&nbsp;
                        </Space>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/course-manage"
                        className={
                          getColorCourseManage
                            ? "ll  text-primary d-flex"
                            : "ll  d-flex"
                        }
                      >
                        <FileTextOutlined />
                        <Space
                          className={
                            getColorCourseManage
                              ? "mx-2  text-primary click-me"
                              : "mx-2   click-me"
                          }
                        >
                          Course Management&nbsp;&nbsp;
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        to="/order-manage"
                        className={
                          getColorOrderManage
                            ? "ll  text-primary d-flex"
                            : "ll  d-flex"
                        }
                      >
                        <SlackOutlined />
                        <Space
                          className={
                            getColorOrderManage
                              ? "mx-2  text-primary click-me"
                              : "mx-2   click-me"
                          }
                        >
                          Order Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        to="/quiz-manage"
                        className={
                          getColorQuizManage
                            ? "ll  text-primary d-flex"
                            : "ll  d-flex"
                        }
                      >
                        <DiffOutlined />
                        <Space
                          className={
                            getColorQuizManage
                              ? "mx-2  text-primary click-me"
                              : "mx-2   click-me"
                          }
                        >
                          Quiz Management
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/teacher-manage" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Teacher Management
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <PieChartOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <FullscreenExitOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <FullscreenExitOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <FullscreenExitOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytic
                        </Space>
                      </Link>
                    </li>

                    <li className="ll d-flex">
                      <Dropdown menu={{ items }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space
                            onClick={handleLogOut}
                            className="mx-2 click-me deshboar-word"
                            role="button"
                          >
                            Logout
                          </Space>
                        </a>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-10 children-deshboard">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
