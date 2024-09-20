function TreeItem({ name, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center justify-center flex-grow flex-shrink-0 basis-0 rounded-[4px] ${
        name === "Option" && "pl-[24px] pr-[8px]"
      } ${name === "Item" && "pl-[48px] pr-[8px]"} ${
        isActive && "bg-neutralForeground2"
      }`}
    >
      <div className="px-[6px] py-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.14645 4.64645C2.34171 4.45118 2.65829 4.45118 2.85355 4.64645L6 7.79289L9.14645 4.64645C9.34171 4.45118 9.65829 4.45118 9.85355 4.64645C10.0488 4.84171 10.0488 5.15829 9.85355 5.35355L6.35355 8.85355C6.15829 9.04882 5.84171 9.04882 5.64645 8.85355L2.14645 5.35355C1.95118 5.15829 1.95118 4.84171 2.14645 4.64645Z"
            fill="#616161"
          />
        </svg>
      </div>

      <div className="py-[6px] px-[2px] flex items-center rounded-[4px] flex-grow flex-shrink-0 basis-0">
        <span
          className={`font-segoe font-normal not-italic text-small leading-normal text-NeutralForeground2Rest  ${
            name === "Group title" && "w-[147px]"
          } ${name === "Option" && "w-[115px]"} ${
            name === "Item" && "w-[91px]"
          }`}
        >
          {name}
        </span>
      </div>
    </li>
  );
}

export default TreeItem;
