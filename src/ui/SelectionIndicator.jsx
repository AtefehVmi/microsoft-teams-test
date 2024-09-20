function SelectionIndicator() {
  return (
    <div className="w-[57px] h-[2px] absolute bottom-[-2]">
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
  );
}

export default SelectionIndicator;
