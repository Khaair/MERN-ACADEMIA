import React from "react";
import Layout from "../Layout";
import { Image } from "antd";
const ImageGallery = () => {
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
      <div class="career-goal-title-area pt-[100px]  pb-[100px]">
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
