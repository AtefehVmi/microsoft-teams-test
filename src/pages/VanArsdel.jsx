import { Outlet } from "react-router-dom";
import AppHeader from "../ui/AppHeader";
import ToolBar from "../ui/ToolBar";
import SectionDivider from "../ui/SectionDivider";

function VanArsdel() {
  return (
    <div className="">
      <AppHeader />
      <SectionDivider />
      <ToolBar />
      <SectionDivider />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default VanArsdel;
