import { NavLink } from "react-router-dom";

function TabItem({ to = "", children, name = "", onClick, isActive }) {
  return (
    <li className="flex flex-col items-center justify-center cursor-pointer gap-[1px] py-[8.5px]">
      <NavLink to={to} onClick={onClick}>
        <div className="flex flex-col items-center">
          {children}
          <span
            className={`font-segoe text-tiny ${
              !isActive
                ? "text-neutralForeground4 "
                : "text-neutralForeground3Selected"
            }`}
          >
            {name}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

export default TabItem;
