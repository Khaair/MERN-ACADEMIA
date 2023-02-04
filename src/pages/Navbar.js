import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nabar-area bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav className="navv">
                <ul>
                  <li>
                    <Link to="/home" className="ll">
                      View Data
                    </Link>
                  </li>
                  <li>
                    <Link to="/Form" className="ll">
                      Add Data
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 bg-primary deshboard-sidebar">hiii</div>
      </div>
    </>
  );
}
