import Chart5 from "./Chart5";
import FooterSlot from "./FooterSlot";
import HeaderSlot from "./HeaderSlot";
import MessageExtension from "./MessageExtension";

function Card5() {
  return (
    <div className="w-[281.75px] h-[400px] flex flex-col items-start gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <div>
        <HeaderSlot />
        <MessageExtension />
      </div>
      <Chart5 />
      <FooterSlot />
    </div>
  );
}

export default Card5;
