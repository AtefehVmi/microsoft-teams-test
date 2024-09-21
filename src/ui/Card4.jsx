import Chart4 from "./Chart4";
import FooterSlot from "./FooterSlot";
import HeaderSlot from "./HeaderSlot";

function Card4() {
  return (
    <div className="h-[400px] w-[266px] flex flex-col items-start gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <HeaderSlot />
      <Chart4 />
      <FooterSlot />
    </div>
  );
}

export default Card4;
