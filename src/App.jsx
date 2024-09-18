import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VanArsdel from "./pages/VanArsdel";
import Activity from "./pages/Activity";
import Chat from "./pages/Chat";
import Teams from "./pages/Teams";
import Calender from "./pages/Calender";
import Calls from "./pages/Calls";
import Files from "./pages/Files";
import WindowLayout from "./ui/WindowLayout";
import Home from "./pages/Home";
import TimeLine from "./pages/TimeLine";
import AssignedToYou from "./pages/AssignedToYou";
import VanArsdelChat from "./pages/VanArsdelChat";
import Apps from "./pages/Apps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WindowLayout />}>
          <Route index element={<Navigate replace to="vanarsdel" />} />
          <Route path="vanarsdel" element={<VanArsdel />}>
            <Route path="home" element={<Home />} />
            <Route path="timeline" element={<TimeLine />} />
            <Route path="chat" element={<VanArsdelChat />} />
            <Route path="assigned-to-you" element={<AssignedToYou />} />
          </Route>
          <Route path="activity" element={<Activity />} />
          <Route path="chat" element={<Chat />} />
          <Route path="teams" element={<Teams />} />
          <Route path="calender" element={<Calender />} />
          <Route path="calls" element={<Calls />} />
          <Route path="files" element={<Files />} />
          <Route path="apps" element={<Apps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
