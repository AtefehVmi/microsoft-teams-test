import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import TitleBar from "./TitleBar";

function WindowLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
      <TitleBar />

      <AppBar />
      <main className="row-start-2 col-start-2 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default WindowLayout;
