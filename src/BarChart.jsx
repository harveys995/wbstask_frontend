import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useSelector } from "react-redux";

// Register the CategoryScale and LinearScale
Chart.register(CategoryScale, LinearScale, BarElement);

export default function BarChart() {
  var data = useSelector((state) => state.comp.topTenData);

  const chartData = {
    labels: data.map((item) => item.team),
    datasets: [
      {
        label: "Value",
        data: data.map((item) => item.value),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Team",
          font: {
            size: 20,
          },
        },
        ticks: {
          font: {
            size: 20, // Set this to the desired size
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
          font: {
            size: 20,
          },
        },
        ticks: {
          font: {
            size: 20, // Set this to the desired size
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
