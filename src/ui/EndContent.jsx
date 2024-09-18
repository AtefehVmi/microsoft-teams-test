import FindBar from "./FindBar";

function EndContent() {
  return (
    <div className="flex py-[8px] items-start justify-end">
      <button className="px-[12px] py-[5px] gap-[4px] rounded-[4px] font-segoe leading-normal font-semibold text-NeutralForeground2Rest bg-neutralBackground1 text-small">
        Filter
      </button>
      <FindBar />
    </div>
  );
}

export default EndContent;
