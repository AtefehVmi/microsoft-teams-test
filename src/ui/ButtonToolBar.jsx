function ButtonToolBar() {
  return (
    <button className="flex items-center justify-center py-[5px] px-[12px] gap-[4px] rounded-[4px] bg-transparentStroke">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
          fill="#424242"
        />
      </svg>

      <span className="text-NeutralForeground2Rest font-segoe font-semibold text-small leading-normal pb-[2px] pl-[2px]">
        Text
      </span>
    </button>
  );
}

export default ButtonToolBar;
