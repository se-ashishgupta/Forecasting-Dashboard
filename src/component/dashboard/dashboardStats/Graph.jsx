import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graph = () => {
  const series = [
    {
      name: "Forcasting",
      data: [
        210, 420, 610, 560, 620, 580, 400, 420, 580, 700, 750, 780, 700, 800,
      ],
    },
  ];

  const options = {
    chart: {
      id: "lineChart",
      toolbar: {
        show: false,
      },
    },
    forecastDataPoints: {
      count: 6,
    },
    // colors: ["#172554", "#FF5733"],
    xaxis: {
      categories: [
        "01/2023",
        "02/2023",
        "03/2023",
        "04/2023",
        "05/2023",
        "06/2023",
        "07/2023",
        "08/2023",
        "09/2023",
        "10/2023",
        "11/2023",
        "12/2023",
        "01/2024",
        "02/2024",
      ],
      tickAmount: 10,
      title: {
        text: "<------------------------- Current and Futire ------------------------->", // X-axis title
        style: {
          color: "#172554",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 800,
      title: {
        text: "Percentage%", // X-axis title
        style: {
          color: "#172554",
          fontSize: "14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
        },
      },
    },
    markers: {
      size: 5,
      colors: "#172554",
      hover: {
        size: 6, // Size of the markers on hover
        sizeOffset: 3,
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -10, // Adjusts the label position to be just below the dot
      style: {
        fontSize: "10px",
        colors: ["#172554"],
        opacity: 0.5, // Color of the data labels
      },
    },

    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: (seriesName) => "Value: ",
        },
      },
      marker: {
        show: false,
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100, 150],
        colorStops: [
          {
            offset: 0,
            color: "#172554",
            opacity: 1,
          },
          {
            offset: 50,
            color: "#172554",
            opacity: 1, // Adjust the point where the green fades to transparent or to the chart's background color
          },
          {
            offset: 60,
            color: "#90ee90",
            opacity: 1,
          },
          {
            offset: 150,
            color: "#90ee90",
            opacity: 1,
          },
        ],
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default Graph;
