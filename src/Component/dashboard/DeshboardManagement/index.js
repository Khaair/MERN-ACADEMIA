import React, { useEffect, useState } from "react";
import Layout from "../layout";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import axios from "axios";

function DeshboardManagement() {
  const [data, setData] = useState([]);
  const chartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 50, 100],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  };

  const barchartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Dataset 1",
        data: [70, 100, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/deshboard-manage/show"
      );
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <Layout>
      <div class="academia-management-area">
            <div class="card min-h-screen">
              <div class="row">
                <div class="col-lg-3">
                  <div class="card bg-danger text-light">
                    <h4>Total Student</h4>
                    <br />
                    <h5>{data?.totalStudent}</h5>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="card bg-primary text-light">
                    {" "}
                    <h4>Total Teacher</h4>
                    <br />
                    <h5>{data?.totalTeacher > 0 ? data?.totalTeacher : 0}</h5>
                  </div>
                </div>
                <div class="col-lg-3">
                  {" "}
                  <div class="card bg-success text-light">
                    {" "}
                    <h4>Total Course</h4>
                    <br />
                    <h5>{data?.totalCourse}</h5>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="card bg-warning text-light">
                    {" "}
                    <h4>Total Online Student</h4>
                    <br />
                    <h5>{data?.totalOnlineStudent}</h5>
                  </div>
                </div>
              </div>
              <div class="chart-area mt-5">
                <div class="row">
                  <div class="col-lg-3">
                    <DoughnutChart data={chartData} />
                  </div>
                  <div class="col-lg-9">
                    <BarChart data={barchartData} />
                  </div>
                </div>
              </div>
            </div>
      </div>
    </Layout>
  );
}

export default DeshboardManagement;
