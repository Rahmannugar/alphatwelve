import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { ChartData } from "../utils/chartData";

interface Props {
  mode: any;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Chart = ({ mode }: Props) => {
  const chartData = {
    labels: ChartData.map((item) => item.month.slice(0, 3)),
    datasets: [
      {
        data: ChartData.map((item) => item.value),
        backgroundColor: "#8576FF",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: mode ? "#64748B" : "#FFF",
        },
        grid: {
          color: mode ? "#E0E0E0" : "#FFF",
        },
      },
      y: {
        ticks: {
          color: mode ? "#64748B" : "#FFF",
        },
        grid: {
          color: mode ? "#E0E0E0" : "#FFF",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: mode ? "#000" : "#FFF",
        },
      },
    },
  };

  return (
    <div className="px-5 lg:px-7">
      <h1
        className={`text-lg font-medium ${
          mode ? "text-[#000000]" : "text-white"
        }`}
      >
        Events Registration per month
      </h1>
      <div
        className={`lg:w-[554px] mt-3 w-full rounded-md ${
          mode ? "border-[#F2F2F7] border" : "bg-[#484554]"
        } md:p-7 p-4`}
        style={{ height: "320px" }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
