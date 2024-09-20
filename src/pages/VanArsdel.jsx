import { Outlet } from "react-router-dom";
import AppHeader from "../ui/AppHeader";
import SectionDivider from "../ui/SectionDivider";

function VanArsdel() {
  return (
    <div className="">
      <AppHeader />
      <SectionDivider />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default VanArsdel;
