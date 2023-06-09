// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import '../ViewCSS/Chart.css';

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(0, 153, 255)",
            borderColor: "rgb(102, 204, 255)",
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: {
                target: 'origin',
                above: 'rgb(0, 153, 255)',   // Area will be red above the origin
                below: 'rgb(0, 0, 255)'    // And blue below the origin
            }
        },
    ],
};

const options= {
    responsive: true,
    maintainAspectRatio: false,
};

const LineChart = () => {
    return (
        <div className={"chart-item"}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;