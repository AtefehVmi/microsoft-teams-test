import Chart2 from "./Chart2";
import FooterSlot from "./FooterSlot";
import HeaderSlot from "./HeaderSlot";

function Card() {
  return (
    <div className="w-[281.75px] h-[400px] flex flex-col items-start gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <HeaderSlot />
      <Chart2 />
      <FooterSlot />
    </div>
  );
}

export default Card;
