import React from "react";
import ReactApexChart from "react-apexcharts";

const UmurChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Laki-laki",
        data: [409, 1048, 2017, 382],
      },
      {
        name: "Perempuan",
        data: [-287, -905, -1821, -253],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 440,
        stacked: true,
      },
      colors: ["#008FFB", "#FF4560"],
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: true,
          barHeight: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        categories: [
          "0-4 Tahun",
          "5-19 Tahun",
          "20-59 Tahun",
          "60 Tahun Keatas",
        ],
        title: {
          text: "Kelompok Umur",
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + " Orang";
          },
        },
      },
      xaxis: {
        title: {
          text: "Jumlah Penduduk",
        },
        labels: {
          formatter: function (val) {
            return Math.abs(val);
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={440}
        />
      </div>
    </div>
  );
};

export default UmurChart;
