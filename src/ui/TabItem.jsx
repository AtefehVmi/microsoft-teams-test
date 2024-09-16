import { NavLink } from "react-router-dom";

function TabItem({ to, children, name }) {
  return (
    <li className="flex flex-col items-center justify-center cursor-pointer gap-[1px] py-[8.5px]">
      <NavLink to={to}>
        <div className="flex flex-col items-center">
          {children}
          <span className="text-neutralForeground4 font-segoe text-tiny">
            {name}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

export default TabItem;
