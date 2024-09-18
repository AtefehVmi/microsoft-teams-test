import { NavLink } from "react-router-dom";

function HorizentalTab({ to, children, isActive = false, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`h-[52px] px-[10px] pb-[12px] pt-[14px] mx-[-8px]  flex items-start justify-center`}
    >
      <NavLink
        to={to}
        className={`font-segoe text-small leading-normal not-italic ${
          isActive
            ? " text-NeutralForeground4Rest font-semibold"
            : " text-NeutralForeground2Rest  font-normal "
        }`}
      >
        {children}
      </NavLink>

      {isActive && (
        <div className="bottom-0 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="3"
            viewBox="0 0 59 3"
            fill="none"
          >
            <path
              d="M12 3C12 1.34315 13.3431 0 15 0H44C45.6569 0 47 1.34315 47 3H12Z"
              fill="#5B5FC7"
            />
          </svg>
        </div>
      )}
    </li>
  );
}

export default HorizentalTab;
