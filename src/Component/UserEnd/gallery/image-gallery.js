import React from "react";
import Layout from "../Layout";
import { useState } from "react";
import { Image } from "antd";

const ImageGallery = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">Image gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="career-goal-title-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <Image.PreviewGroup>
                  <div class="flex justify-between">
                    <Image width={200} src="/uploads/about-us.jpg" />

                    <Image width={200} src="/uploads/about-us.jpg" />
                    <Image width={200} src="/uploads/about-us.jpg" />
                    <Image width={200} src="/uploads/about-us.jpg" />
                    <Image width={200} src="/uploads/about-us.jpg" />
                  </div>
                </Image.PreviewGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageGallery;
