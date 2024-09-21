import Chart3 from "./Chart3";
import FooterSlot from "./FooterSlot";
import HeaderSlot3 from "./HeaderSlot3";
import MessageExtension from "./MessageExtension";

function Card3() {
  return (
    <div className="w-[487.5px] h-[400px] flex flex-col items-start gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <div className="">
        <HeaderSlot3 />

        <MessageExtension />
      </div>
      <Chart3 />
      <FooterSlot />
    </div>
  );
}

export default Card3;
