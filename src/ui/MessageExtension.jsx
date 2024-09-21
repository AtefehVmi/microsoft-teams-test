function MessageExtension() {
  return (
    <div className="flex h-[32px] items-center self-stretch">
      <div>
        <span className="flex flex-col items-center justify-center m-[6px] relative px-[2px] leading-normal font-segoe text-small font-semibold text-NeutralForeground4Rest">
          7 days
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="2"
          viewBox="0 0 57 2"
          fill="none"
        >
          <rect x="8" width="41" height="2" rx="1" fill="#5B5FC7" />
        </svg>
      </div>

      <span className="m-[6px] px-[2px] flex flex-col items-center justify-center font-normal leading-normal font-segoe text-small text-NeutralForeground2Rest">
        30 days
      </span>
      <span className="m-[6px] px-[2px] flex flex-col items-center justify-center font-normal leading-normal font-segoe text-small text-NeutralForeground2Rest">
        60 days
      </span>
    </div>
  );
}

export default MessageExtension;
