import React from "react";
import Layout from "../Layout";

const VideoGallery = () => {
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">Video Gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="career-goal-title-area mt-5">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/zWlXJPTb_Vk?si=VFKOeNYF3Mio09Sj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-lg-6">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/zWlXJPTb_Vk?si=VFKOeNYF3Mio09Sj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoGallery;
