// import "./styles.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "Febuary", Total: 2100 },
    { name: "March", Total: 2300 },
    { name: "April", Total: 700 },
    // { name: "May", Total: 900 },
    // { name: "June", Total: 1200 },
    // { name: "July", Total: 1200 },
    // { name: "August", Total: 1200 },
    // { name: "September", Total: 1200 },
    // { name: "Octobar", Total: 1200 },
    // { name: "November", Total: 1200 },
    // { name: "December", Total: 1200 },
  ];
  return (
    <div className="flex-3 shadow-lg p-4 text-gray-400">
      <ResponsiveContainer width="100%" aspect={2/1}>
        <div className="my-5">Last 6 months Revenue</div>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" className="m-5" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
