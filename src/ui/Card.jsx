import Chart1 from "./Chart1";
import FooterSlot from "./FooterSlot";
import HeaderSlot from "./HeaderSlot";

function Card() {
  return (
    <div className="w-[250px] h-[368px] flex flex-col items-start gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <HeaderSlot />
      <Chart1 />
      <FooterSlot />
    </div>
  );
}

export default Card;
