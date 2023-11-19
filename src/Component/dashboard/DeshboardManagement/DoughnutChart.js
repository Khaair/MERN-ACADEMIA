import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      // Additional chart options...
    };

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      // Destroy the previous chart instance
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options: chartOptions,
    });

    return () => {
      // Cleanup: Destroy the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="area">
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
