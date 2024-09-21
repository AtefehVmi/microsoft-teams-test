import Row from "./Row";
import Row2 from "./Row2";

function Dashboard() {
  return (
    <div className="px-[20px] pt-[20px] flex flex-col items-start flex-grow flex-shrink-0 basis-0 self-stretch gap-[12px]">
      <Row />
      <Row2 />
    </div>
  );
}

export default Dashboard;
