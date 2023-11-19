import Layout from "./Layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BellOutlined, QrcodeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
export default function Tutorials({ children }) {
  const [getColorDeshboard, setColorDeshboard] = useState();

  return (
    <React.Fragment>
      <div class="container-fluid">
        <Layout>
          <div class="layer-area">
            <div className="row">
              <div className="nabar-area border-top">
                <nav className="navv">
                  <div className="top-navbar-wrapper">
                    <div className="accademia-logo">
                      <Link to="/home">
                        {" "}
                        <h5></h5>
                      </Link>
                    </div>

                    <div>
                      <Button type="primary mx-2" ghost>
                        HTML
                      </Button>
                      <Button className="mx-2" type="primary" ghost>
                        CSS
                      </Button>
                      <Button type="primary mx-2" ghost>
                        JAVASCRIPT
                      </Button>
                      <Button type="primary mx-2" ghost>
                        REACTJS
                      </Button>
                      <Button type="primary mx-2" ghost>
                        NODEJS
                      </Button>
                      <Button type="primary mx-2" ghost>
                        EXPRESSJS
                      </Button>
                      <Button type="primary mx-2" ghost>
                        MONGODB
                      </Button>
                    </div>

                    <div className="top-nav-right-icon d-flex">
                      <div className="title-deshboard-wrapper-icon">
                        <BellOutlined role="button" />
                      </div>
                      <div className="title-deshboard-wrapper-icon">
                        {" "}
                        <QrcodeOutlined role="button" />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="sidebar-area">
                <div class="row">
                  <div class="col-lg-2 deshboard-sidebar">
                    <div className="mt-3">
                      <ul>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tutorials"
                            className={
                              getColorDeshboard
                                ? "ll  text-primary d-flex"
                                : "ll  d-flex"
                            }
                          >
                            <Space
                              className={
                                getColorDeshboard
                                  ? "mx-2  text-primary click-me"
                                  : "mx-2   click-me"
                              }
                            >
                              Java Introduction
                            </Space>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-10 children-deshboard">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
}
