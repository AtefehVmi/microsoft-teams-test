import Button from "./Button";

function HeaderSlot() {
  return (
    <div>
      <div className="flex items-start self-stretch gap-[12px] font-segoe not-italic h-[36px] mb-[16px]">
        <div className="flex flex-col self-stretch w-[170px]">
          <span className="font-bold leading-normal text-small text-NeutralForeground4Rest">
            Card title
          </span>
          <span className="font-normal self-stretch leading-small text-tinyx2 text-neutralForeground3">
            Description
          </span>
        </div>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M7 10C7 10.6904 6.44036 11.25 5.75 11.25C5.05964 11.25 4.5 10.6904 4.5 10C4.5 9.30964 5.05964 8.75 5.75 8.75C6.44036 8.75 7 9.30964 7 10ZM12 10C12 10.6904 11.4404 11.25 10.75 11.25C10.0596 11.25 9.5 10.6904 9.5 10C9.5 9.30964 10.0596 8.75 10.75 8.75C11.4404 8.75 12 9.30964 12 10ZM15.75 11.25C16.4404 11.25 17 10.6904 17 10C17 9.30964 16.4404 8.75 15.75 8.75C15.0596 8.75 14.5 9.30964 14.5 10C14.5 10.6904 15.0596 11.25 15.75 11.25Z"
              fill="#424242"
            />
          </svg>
        </Button>
      </div>

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
    </div>
  );
}

export default HeaderSlot;
