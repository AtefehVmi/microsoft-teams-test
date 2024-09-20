import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 72 },
  { name: "Group B", value: 20 },
];

const COLORS = ["#00B7C3", "#D1D1D1"];

function Chart1() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-[24px] flex-1 flex-shrink-0 basis-0">
      <div className="flex flex-row items-end">
        <div className="flex flex-col font-semibold not-italic font-segoe leading-small text-tinyx2">
          0
        </div>
        <div className="relative flex flex-col items-center justify-end">
          <PieChart width={165.59} height={85}>
            <Pie
              data={data}
              cx={78}
              cy={78}
              startAngle={180}
              endAngle={0}
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
          <div className="font-segoe absolute text-center font-semibold text-big leading-extraBig not-italic w-[114px] h-[36px] text-NeutralForeground2Rest">
            72%
          </div>
        </div>
        <div className="flex flex-col font-semibold not-italic font-segoe leading-small text-tinyx2">
          100
        </div>
      </div>

      <div className="flex gap-[16px] items-center justify-center">
        <div className="w-[52px] h-[16px] gap-[4px] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M-0.000793457 0.623392C-0.000793457 0.278158 0.279074 -0.00170898 0.624309 -0.00170898H9.37574C9.72097 -0.00170898 10.0008 0.278159 10.0008 0.623393V9.37482C10.0008 9.72006 9.72097 9.99992 9.37574 9.99992H0.624307C0.279073 9.99992 -0.000793457 9.72006 -0.000793457 9.37482V0.623392Z"
              fill="#00B7C3"
            />
          </svg>
          <span className="w-[38px] font-normal not-italic font-segoe leading-small text-tinyx2 text-NeutralForeground2Rest">
            Label 1
          </span>
        </div>
        <div className="w-[52px] h-[16px] gap-[4px] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M0.000854492 0.623392C0.000854492 0.278158 0.280722 -0.00170898 0.625957 -0.00170898H9.37739C9.72262 -0.00170898 10.0025 0.278159 10.0025 0.623393V9.37482C10.0025 9.72006 9.72262 9.99992 9.37739 9.99992H0.625955C0.280721 9.99992 0.000854492 9.72006 0.000854492 9.37482V0.623392Z"
              fill="#D1D1D1"
            />
          </svg>
          <span className="w-[38px] font-normal not-italic font-segoe leading-small text-tinyx2 text-NeutralForeground2Rest">
            Label 2
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chart1;
