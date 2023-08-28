import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "40px",
  textAlign: "center",
};

const CarouselEx: React.FC = () => (
  <Carousel autoplay>
    <div className="bg-[url('/uploads/background-banner-edu.jpg')] bg-center bg-no-repeat bg-cover">
      <h1 style={contentStyle}></h1>
    </div>
    <div className="bg-[url('/uploads/school-03.jpg')] bg-center bg-no-repeat bg-cover">
      <h1 style={contentStyle}></h1>
    </div>
    <div className="bg-[url('/uploads/background-banner-edu.jpg')] bg-center bg-no-repeat bg-cover">
      <h1 style={contentStyle}></h1>
    </div>
    <div className="bg-[url('/uploads/Bangabundhu_mural2.jpg')] bg-center bg-no-repeat bg-cover">
      <h1 style={contentStyle}></h1>
    </div>
  </Carousel>
);

export default CarouselEx;
