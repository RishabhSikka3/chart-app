// App.js

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import ScatterChart from "./components/ScatterChart";

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const yResponse = await fetch("https://retoolapi.dev/o5zMs5/data");
        const xResponse = await fetch("https://retoolapi.dev/gDa8uC/data");

        if (!yResponse.ok || !xResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const yData = await yResponse.json();
        const xData = await xResponse.json();

        // Extract Label and RandomNumber values for the first 50 data points
        const yLabelsAndRandomNumbers = yData.slice(0, 50).map((item) => ({
          label: item.Label,
          value: parseFloat(item.RandomNumber),
        }));

        const xLabelsAndRandomNumbers = xData.slice(0, 50).map((item) => ({
          label: item.Label,
          value: parseFloat(item.RandomNumber),
        }));

        // Create the dataset
        const scatterData = {
          datasets: [
            {
              // label: "Scatter Point",
              data: yLabelsAndRandomNumbers.map((item, index) => ({
                x: xLabelsAndRandomNumbers[index].value,
                y: item.value,
                label: `(${xLabelsAndRandomNumbers[index].label},${item.label})`, // Format label
              })),
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(scatterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Scatter Graph For Random Numbers",
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              const x = context.dataset.data[context.dataIndex].x.toFixed(3);
              const y = context.dataset.data[context.dataIndex].y.toFixed(3);
              label += `${
                context.dataset.data[context.dataIndex].label
              } - (${x}, ${y})`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "X-Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-Axis",
        },
      },
    },
  };

  return (
    <div className="App">
      {chartData && <ScatterChart chartData={chartData} options={options} />}
    </div>
  );
}
