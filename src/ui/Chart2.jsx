import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
} from "recharts";

const data = [
  { name: "Jan", pv: 75 },
  { name: "Feb", pv: 80 },
  { name: "Mar", pv: 63 },
  { name: "Apr", pv: 75 },
  { name: "May", pv: 63 },
  { name: "Jun", pv: 94 },
];

function Chart2() {
  return (
    <div className="h-screen flex items-center justify-center ml-[-20px]">
      <div className="flex items-center justify-center w-[240px] h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" interval={0} tick={{ fontSize: 10 }}>
              <Label
                value="X-axis title"
                offset={-5}
                position="insideBottom"
                style={{
                  textAnchor: "middle",
                  fontSize: "10px",
                  fontWeight: "600",
                  color: "#424242",
                  lineHeight: "14px",
                }}
              />
            </XAxis>

            <YAxis
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}K`}
              tick={{ fontSize: 10 }}
            >
              <Label
                value="Y-axis title"
                offset={22}
                angle={-90}
                position="insideLeft"
                style={{
                  textAnchor: "middle",
                  fontSize: "10px",
                  fontWeight: "600",
                  color: "#424242",
                  lineHeight: "14px",
                }}
              />
            </YAxis>

            <Bar
              dataKey="pv"
              barSize={Math.max(20, 100 / data.length)}
              fill="#00B7C3"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart2;
