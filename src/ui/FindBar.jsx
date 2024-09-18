function FindBar() {
  return (
    <div className="w-[200px] h-[32px] bg-neutralBackground1 rounded-small flex items-center px-[10px] border-transparentStroke shadow-neutralForeground3 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="mr-[6px]"
      >
        <path
          d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z"
          fill="#616161"
        />
      </svg>

      <input
        type="text"
        placeholder="Find"
        className="flex items-start flex-grow flex-shrink-0 basis-0 w-[156px] h-[20px] bg-neutralBackground1 text-neutralForeground4 font-segoe text-small font-normal leading-normal outline-none px-[2px] pt-[5px] pb-[7px]"
      />
    </div>
  );
}

export default FindBar;
