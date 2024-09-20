import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import TitleBar from "./TitleBar";

function WindowLayout() {
  return (
    <div className="w-[1366px] h-[1012px] rounded-[8px]">
      <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
        <TitleBar />

        <AppBar />
        <main className="row-start-2 col-start-2 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default WindowLayout;
