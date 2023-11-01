import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DonateCharts({ data, labels, colors }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    // Create a gradient for the background color
    const gradient = myChartRef.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "black"); // Start color
    gradient.addColorStop(1, "#ffb210");
    gradient.addColorStop(1, "#ffb403");
 ;   // End color

    let myDoughnutChart = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["March", "April", "May", "June"],
        datasets: [
          {
            data: [10, 20, 50, 30],
            backgroundColor: [gradient, gradient, gradient, gradient],
          },
        ],
      },    
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: false,
      },
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, [data, colors, labels]);

  return (
    <div className="w-[40%] shadow-lg rounded-lg flex flex-col gap-4 justify-center">
      <h2 className="text-black text-3xl self-center">Number Of Order Per Month</h2>
      <div className="w-96 h-[500px] self-center">
        <canvas id="myChart" ref={chartRef} height="40px" />
      </div>
    </div>
  );
}
