import React from "react";
import Layout from "./Layout";

export default function CourseDeshboard() {
  return (
    <Layout>
      <div class="course-deshboard-area">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <h4 className=" text-light">কোর্স অগ্রগতি</h4>

              <div class="col-lg-4 pt-2">
                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>

              <div class="col-lg-4 pt-2">
                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>
              <div class="col-lg-4 pt-2">
                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-6 pt-3">
                <h4 className="text-light pb-2"> Course Report</h4>

                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>

              <div class="col-lg-6 pt-3">
                <h4 className="text-light pb-2">Quiz marks</h4>

                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-lg-6 pt-3">
                <h4 className="text-light pb-2">Assignment Marks</h4>

                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>

              <div class="col-lg-6 pt-3">
                <h4 className=" text-light pb-2">Assignment Report</h4>

                <div class="card">
                  <h6>কোর্স মডিউল শেষ করেছেন</h6>
                  <h6 className="text-primary">1 টি</h6>

                  <p>কোর্স বাকি আছে 11 টি</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
