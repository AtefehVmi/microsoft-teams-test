import Chart6 from "./Chart6";
import HeaderSlot2 from "./HeaderSlot2";
import MessageExtension2 from "./MessageExtension2";

function Card6() {
  return (
    <div className="w-[503.25px] h-[400px] flex flex-col items-center gap-[16px] p-[16px] self-stretch rounded-[8px] border-transparentStroke border-1 shadow-custom">
      <div>
        <HeaderSlot2 />
        <MessageExtension2 />
      </div>
      <Chart6 />
    </div>
  );
}

export default Card6;
