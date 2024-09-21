import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 130 },
  { name: "Group C", value: 90 },
  { name: "Group D", value: 180 },
  { name: "Group E", value: 200 },
];

const COLORS = ["#A6E9ED", "#F5F5F5", "#00B7C3", "#005B70", "#00666D"];

function Chart5() {
  return (
    <div className="flex relative flex-col items-center justify-center self-stretch gap-[24px] flex-1 flex-shrink-0 basis-0">
      <div className="h-[199px] w-[199px] flex flex-col items-center justify-center self-stretch rotate-[50deg]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx={95}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="font-segoe absolute text-center font-semibold text-[28px] leading-[36px] not-italic w-[122px] h-[40px] mb-[7px] mr-[35px] text-NeutralForeground2Rest">
        1000
      </div>
    </div>
  );
}

export default Chart5;
