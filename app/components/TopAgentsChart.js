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

      // Use afterDraw plugin to draw smaller images below each bar
      chart.options.plugins.afterDraw = () => {
        const meta = chart.getDatasetMeta(0); // Get the dataset meta info

        agents.forEach((agent, index) => {
          const x = meta.data[index].x - 10; // Adjust x-coordinate for centering image
          const y = chart.scales["y"].bottom + 10; // Adjust y-coordinate for spacing below the chart

          // Draw small agent image (20x20 size)
          ctx.drawImage(images[index], x, y, 20, 20);
        });
      };

      chart.update();
    }
  }, [agents]);

  const data = {
    labels: agents.map(() => ""), // Blank labels for the x-axis to avoid overlap
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
          title: function (tooltipItems) {
            const index = tooltipItems[0].dataIndex; // Get the index of the hovered bar
            return agents[index].name; // Display the agent's name in the tooltip
          },
          label: function (tooltipItem) {
            return `Performance: ${tooltipItem.raw}%`; // Display the performance as label
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hide the default x-axis labels (we'll draw images here)
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
