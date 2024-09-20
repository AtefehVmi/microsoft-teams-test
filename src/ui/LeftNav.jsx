import Tree from "./Tree";
import Dashboard from "./Dashboard";

function LeftNav() {
  return (
    <div className="flex items-start w-[1298px] h-[856px]">
      <Tree />
      <Dashboard />
    </div>
  );
}

export default LeftNav;
