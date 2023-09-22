import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Button } from "antd";
import Search from "antd/es/transfer/search";

import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
  QrcodeOutlined,
  LogoutOutlined,
  LineChartOutlined,
  CopyOutlined,
  BlockOutlined,
  QuestionCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const DeshboardLayout = ({ children }) => {
  const [getColorStudentManage, setColorStudentManage] = useState();
  const [getColorCourseManage, setColorCourseManage] = useState();
  const [getColorOrderManage, setColorOrderManage] = useState();
  const [getColorResultManage, setColorResultManage] = useState();
  const [getColorQuizManage, setColorQuizManage] = useState();
  const [getColorDeshboardManage, setColorDeshboardManage] = useState();
  const [getColorTeacherManage, setColorTeacherdManage] = useState();
  const [getColorAboutUsManage, setColorAboutUsdManage] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    getItem("Deshboard", "deshboard", <PieChartOutlined />),
    getItem("Website Manage", "sub1", <DesktopOutlined />, [
      getItem("Slide Manage", "slide-manage"),
      getItem("About Us Manage", "about-us-manage"),
      getItem("Speech Manage", "speech-manage"),
      getItem("Facilities Manage", "facilites-manage"),
      getItem("Notices Manage", "notices-manage"),
      getItem("Mission and Vission", "mission-vission-manage"),
      getItem("Image Gallery", "image-gallery-manage"),
      getItem("Video Gallery", "video-gallery-manage"),
      getItem("Contact Manage", "contact-manage"),
    ]),
    getItem("Teacher Manage", "teacher-manage", <UserOutlined />),
    getItem("Student Manage", "student-manage", <TeamOutlined />),
    getItem("Class Manage", "class-manage", <QuestionCircleOutlined />),

    getItem("Attendance Manage", "sub2", <LineChartOutlined />, [
      getItem("Take Attendance", "attendance-manage"),
      getItem("Attendance list", "attendance-list"),
    ]),

    getItem("Result Manage", "sub3", <LineChartOutlined />, [
      getItem("Add result", "result-manage"),
      getItem("Result list", "result-list"),
    ]),
    getItem("Course Manage", "course-manage", <CopyOutlined />),
    getItem("Order Manage", "order-manage", <BlockOutlined />),
    getItem("Quiz Manage", "quiz-manage", <QuestionCircleOutlined />),

    getItem("Fee Manage", "fee-manage", <DesktopOutlined />),
    getItem("Admission Manage", "admission-manage", <DesktopOutlined />),
    getItem("Admit card Manage", "admit-card-manage", <DesktopOutlined />),
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("logedinData");

    navigate("/admin");
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
    if (location?.pathname === "/about-us-manage") {
      setColorAboutUsdManage(true);
    }
  }, [location?.pathname]);

  return (
    <React.Fragment>
      <div class="layer-area">
        <div class="container-fluid">
          <div className="row">
            <div className="nabar-area">
              <nav className="navv">
                <div className="top-navbar-wrapper">
                  <div className="accademia-logo">
                    <Link to="/">
                      <AppstoreOutlined
                        style={{ fontSize: "35px", color: "#06BBCC" }}
                      />
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
              <Layout className="bg-white">
                <div class="flex justify-between">
                  <div className="shadow">
                    <Sider
                      width="240px"
                      collapsible
                      collapsed={collapsed}
                      onCollapse={(value) => setCollapsed(value)}
                    >
                      <Menu
                        theme="light"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                      >
                        {items.map((item) =>
                          item.children ? (
                            <SubMenu
                              key={item.key}
                              icon={item.icon}
                              title={item.label}
                            >
                              {item.children.map((childItem) => (
                                <Menu.Item key={childItem.key}>
                                  <Link to={`/${childItem.key}`}>
                                    {childItem.label}
                                  </Link>
                                </Menu.Item>
                              ))}
                            </SubMenu>
                          ) : (
                            <Menu.Item key={item.key} icon={item.icon}>
                              <Link to={`/${item.key}`}>{item.label}</Link>
                            </Menu.Item>
                          )
                        )}
                      </Menu>
                    </Sider>
                  </div>
                  <div class="children-deshboard w-[1254px]">
                    <Layout className="bg-white">{children}</Layout>
                  </div>
                </div>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DeshboardLayout;
