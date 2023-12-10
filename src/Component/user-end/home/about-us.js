import React, { useCallback, useEffect, useState } from "react";
import { Image } from "antd";
import { fetchPublicAboutUsHandler } from "../../../api/about-us";
import { RotatingLines } from "react-loader-spinner";

const AboutUsContainer = () => {
  const [getAboutUs, setAboutUs] = useState({
    loading: false,
    data: null,
  });

  const fetchAboutUs = useCallback(async () => {
    if (true) {
      await setAboutUs({ loading: true, data: null });
      await fetchPublicAboutUsHandler().then((res) => {
        if (res?.status === 200) {
          setAboutUs({
            loading: false,
            data: res?.data,
          });
        } else {
          setAboutUs({
            loading: false,
            data: null,
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    fetchAboutUs();
  }, [fetchAboutUs]);

  return (
    <div class="about-us-area bg-[white] pt-[100px]">
      <div class="bootstrap-container">
        <div class="row">
          {/* <pre>
            <code>{JSON.stringify(getAboutUs?.loading, null, 4)}</code>
          </pre> */}
          <div class="col-lg-6">
            <Image.PreviewGroup className="h-[150px]">
              <Image
                className="w-full h-full object-cover"
                src="/uploads/about-us.jpg"
                alt="avatar"
              />
            </Image.PreviewGroup>
          </div>
          <div class="col-lg-6">
            <div class="p-4">
              {getAboutUs?.loading ? (
                <RotatingLines
                  strokeColor="#06BBCC"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              ) : (
                <div>
                  {getAboutUs?.data?.map((item, index) => {
                    return (
                      <>
                        <h6 className="text-[#06BBCC] text-lg">ABOUT US</h6>

                        <h2 className="text-4xl font-bold mt-3">
                          {item?.title}
                        </h2>
                        <p className="mt-3 text-justify">{item?.description}</p>
                        <button className="mt-4 bg-[#06BBCC] text-white px-5 py-3">
                          Read more
                        </button>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
