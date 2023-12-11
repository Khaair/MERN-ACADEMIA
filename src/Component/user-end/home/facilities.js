import React, { useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
const Facilities = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="our-facilities-area bg-[white] pt-[100px]">
      <div class="bootstrap-container">
        <div class="row">
          <div class="col-lg-3 mb-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="400"
              className="text-[#06BBCC]  p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center"
            >
              <UserOutlined style={{ fontSize: "70px" }} />
              <h3 className="mt-3">Skilled Instructor</h3>
              <h6 className="mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                voluptate beatae laudantium asperiores{" "}
              </h6>
            </div>
          </div>
          <div class="col-lg-3 mb-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center "
            >
              <GlobalOutlined style={{ fontSize: "70px" }} />
              <h3 className="mt-3">Online Classes</h3>
              <h6 className="mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                voluptate beatae laudantium asperiores{" "}
              </h6>
            </div>
          </div>
          <div class="col-lg-3 mb-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1200"
              className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center "
            >
              <HomeOutlined style={{ fontSize: "70px" }} />
              <h3 className="mt-3">Home Project</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                voluptate beatae laudantium asperiores{" "}
              </h6>
            </div>
          </div>
          <div class="col-lg-3 mb-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1600"
              className="text-[#06BBCC] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] transition-all duration-500 linear hover:text-white  rounded text-center"
            >
              <BookOutlined style={{ fontSize: "70px" }} />
              <h3 className="mt-3">Book Library</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                voluptate beatae laudantium asperiores{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
