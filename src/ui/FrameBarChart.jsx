function FrameBarChart({ children }) {
  return (
    <>
      <div className=" flex  h-[231px] flex-col items-center justify-end gap-[2px] relative">
        <div className=" h-[210px] flex items-end justify-center gap-[2px] z-10 absolute bottom-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[68%]"
            viewBox="0 0 16 169"
            fill="none"
          >
            <path d="M0.75 169V0H15.4167V169H0.75Z" fill="#93C5FD" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[82%]"
            viewBox="0 0 16 210"
            fill="none"
          >
            <path d="M0.416626 210V0H15.0833V210H0.416626Z" fill="#1D4ED8" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-[30%]"
            viewBox="0 0 15 74"
            fill="none"
          >
            <path d="M0.083374 74V0H14.75V74H0.083374Z" fill="#888888" />
          </svg>
        </div>

        <div className="w-[64px] h-[5px] flex items-start justify-between self-stretch flex-wrap content-start">
          <div className="h-[1px] w-[63px] bg-frameLine"></div>
          <div className="w-[1px] h-[5px] bg-frameLine"></div>
        </div>

        <div className="font-segoe font-normal leading-[12px] text-[10px] not-italic text-Neutral z-10 absolute mb-[-10px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default FrameBarChart;
