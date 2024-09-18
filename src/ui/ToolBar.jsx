import StartContent from "./StartContent";
import EndContent from "./EndContent";

function ToolBar() {
  return (
    <div className=" flex w-[1298px] h-[48px]">
      <div className="py-[8px] pl-[20px] ">
        <StartContent />
      </div>

      <div className="w-[266px] h-[32px]">
        <EndContent />
      </div>
    </div>
  );
}

export default ToolBar;
