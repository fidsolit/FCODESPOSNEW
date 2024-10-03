// components/TopAgentsChart.js
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopAgentsChart = ({ agents }) => {
  const chartRef = useRef(null);

  // Load images into an array
  const loadImages = () => {
    const images = agents.map((agent) => {
      const img = new Image();
      img.src = agent.image;
      return img;
    });
    return images;
  };

  useEffect(() => {
    const images = loadImages(); // Preload images

    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      // Draw images in place of labels on the x-axis
      chart.options.plugins.afterDraw = function () {
        agents.forEach((agent, index) => {
          const imgSize = 30;
          const x = chart.getDatasetMeta(0).data[index].x - imgSize / 2;
          const y = chart.scales["x"].bottom + 20;

          ctx.drawImage(images[index], x, y, imgSize, imgSize);

          // Draw name below the image
          ctx.font = "12px Poppins";
          ctx.fillStyle = "#333";
          ctx.textAlign = "center";
          ctx.fillText(agent.name, x + imgSize / 2, y + imgSize + 15);
        });
      };

      chart.update();
    }
  }, [agents]);

  const data = {
    labels: agents.map(() => ""), // Leave labels blank to make room for the images
    datasets: [
      {
        label: "Performance",
        data: agents.map((agent) => agent.performance),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderRadius: 10,
        barThickness: 40,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
            family: "'Poppins', sans-serif",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Top Performing Agents",
        font: {
          size: 24,
          family: "'Poppins', sans-serif",
          weight: "bold",
        },
        color: "#333",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Performance: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hide the default x-axis labels (we'll draw them with images)
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            family: "'Poppins', sans-serif",
          },
          color: "#333",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <div className="relative h-96">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default TopAgentsChart;
