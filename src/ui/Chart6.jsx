import FrameBarChart from "./FrameBarChart";

function Chart6() {
  return (
    <div className="h-[271px] flex items-end justify-center ">
      <FrameBarChart>XS</FrameBarChart>
      <FrameBarChart>S</FrameBarChart>
      <FrameBarChart>M</FrameBarChart>
      <FrameBarChart>L</FrameBarChart>
      <FrameBarChart>XL</FrameBarChart>
      <FrameBarChart>XXL</FrameBarChart>
      <div className="flex w-[471px] h-[272px] flex-col items-center justify-between self-stretch absolute z-0">
        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic">
            100
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            90
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            80
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            70
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            60
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            50
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            40
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            30
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center  text-Neutral">
            20
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center  text-Neutral">
            10
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            0
          </span>
          <div className="h-[1px] w-[447px] bg-frameLine"></div>
        </div>
      </div>
    </div>
  );
}

export default Chart6;
