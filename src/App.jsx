import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VanArsdel from "./pages/VanArsdel";
import AppLayout from "./ui/AppLayout";
import Activity from "./pages/Activity";
import Chat from "./pages/Chat";
import Teams from "./pages/Teams";
import Calender from "./pages/Calender";
import Calls from "./pages/Calls";
import Files from "./pages/Files";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="vanarsdel" />} />

          <Route path="vanarsdel" element={<VanArsdel />} />
          <Route path="activity" element={<Activity />} />
          <Route path="chat" element={<Chat />} />
          <Route path="teams" element={<Teams />} />
          <Route path="calender" element={<Calender />} />
          <Route path="calls" element={<Calls />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
