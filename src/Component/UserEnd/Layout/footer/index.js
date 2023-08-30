import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footer-area bg-[#f0fbfc]">
        <div class="bootstrap-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>Quick Links</h4>
                  </li>
                  <li>Home</li>
                  <li>About</li>
                  <li>My Account</li>
                  <li>Shop</li>
                  <li>Cartssss</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>For Beginer</h4>
                  </li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>

                  <li>Basic JavaScript</li>
                  <li>Basic React</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>For Mid lavel</h4>
                  </li>
                  <li>Advance JavaScript</li>
                  <li>Advance NodeJS</li>
                  <li>ExpressJs</li>
                  <li>MongoDB</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-item-wrapper">
                <ul>
                  <li>
                    <h4>Edu Tech BD</h4>
                  </li>
                  <li>
                    <img
                      src="https://skyblue.com.bd/wp-content/uploads/2019/12/Sky-Blue-on-facebook.jpg"
                      alt="find us facebook"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skyblue.com.bd/wp-content/uploads/2019/12/Instragram.jpg"
                      alt="find us facebook"
                    />
                  </li>
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
              <div className="footer-bottom-item-wrapper">
                <div>
                  <p>Copyright © 2022 Edu Tech BD</p>
                </div>
                <div>
                  <p>Powered by Edu Tech BD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
