import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footer-area bg-[#f0fbfc]">
        <div class="bootstrap-container">
          <div className="py-[50px]">
            <div className="flex justify-between">
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>Quick Links</h4>
                  </li>
                  <li className="text-[black]">Home</li>
                  <li className="text-[black]">About</li>
                  <li className="text-[black]">My Account</li>
                  <li className="text-[black]">Shop</li>
                  <li className="text-[black]">Cartssss</li>
                </ul>
              </div>
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>For Beginer</h4>
                  </li>
                  <li className="text-[black]">HTML</li>
                  <li className="text-[black]">CSS</li>
                  <li className="text-[black]">Bootstrap</li>

                  <li className="text-[black]">Basic JavaScript</li>
                  <li className="text-[black]">Basic React</li>
                </ul>
              </div>
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>For Mid lavel</h4>
                  </li>
                  <li className="text-[black]">Advance JavaScript</li>
                  <li className="text-[black]">Advance NodeJS</li>
                  <li className="text-[black]">ExpressJs</li>
                  <li className="text-[black]">MongoDB</li>
                  <li className="text-[black]">AWS</li>
                </ul>
              </div>

              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>For Mid lavel</h4>
                  </li>
                  <li className="text-[black]">Advance JavaScript</li>
                  <li className="text-[black]">Advance NodeJS</li>
                  <li className="text-[black]">ExpressJs</li>
                  <li className="text-[black]">MongoDB</li>
                  <li className="text-[black]">AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-area bg-[#f0fbfc]">
        <div class="bootstrap-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center primary-card-padding">
                <p>Copyright © 2022 Edu Tech BD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
