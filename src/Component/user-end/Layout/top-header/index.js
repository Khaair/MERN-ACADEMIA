import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const TopHeader = () => {
  return (
    <>
      <div class="top-header-area bg-[#06BBCC]">
        <div class="bootstrap-container">
          <div class="row">
            <div class="col-lg-12">
              <div className="flex justify-between pb-1">
                <div>
                  <FacebookOutlined
                    style={{
                      fontSize: "19px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                  <TwitterOutlined
                    style={{
                      fontSize: "19px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                  <LinkedinOutlined
                    style={{
                      fontSize: "19px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                  <GooglePlusOutlined
                    style={{
                      fontSize: "19px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                </div>
                <div className="text-white">
                  <PhoneOutlined
                    style={{
                      fontSize: "19px",
                      color: "white",
                      marginRight: "4px",
                    }}
                  />
                  +8801777975237
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
