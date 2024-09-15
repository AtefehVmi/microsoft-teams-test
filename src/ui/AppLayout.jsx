import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import TitleBar from "./TitleBar";

function AppLayout() {
  return (
    <div>
      <TitleBar />
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
