import { Outlet } from "react-router-dom";
import AppHeader from "../ui/AppHeader";
import ToolBar from "../ui/ToolBar";

function VanArsdel() {
  return (
    <div className="">
      <AppHeader />
      <ToolBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default VanArsdel;
