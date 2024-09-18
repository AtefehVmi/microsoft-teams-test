import { useState } from "react";
import HorizentalTab from "./HorizentalTab";

function HorizentalTabList() {
  const [activeTab, setActiveTab] = useState("/vanarsdel/home");
  function makeActive(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="w-[277px] h-[52px] ">
      <ul className="flex items-start gap-[8px] ml-[4px]">
        <HorizentalTab
          isActive={activeTab === "/vanarsdel/home"}
          onClick={() => makeActive("/vanarsdel/home")}
          to="/vanarsdel/home"
        >
          Home
        </HorizentalTab>
        <HorizentalTab
          isActive={activeTab === "/vanarsdel/timeline"}
          onClick={() => makeActive("/vanarsdel/timeline")}
          to="/vanarsdel/timeline"
        >
          Timeline
        </HorizentalTab>
        <HorizentalTab
          isActive={activeTab === "/vanarsdel/chat"}
          onClick={() => makeActive("/vanarsdel/chat")}
          to="/vanarsdel/chat"
        >
          Chat
        </HorizentalTab>
        <HorizentalTab
          isActive={activeTab === "/vanarsdel/assigned-to-you"}
          onClick={() => makeActive("/vanarsdel/assigned-to-you")}
          to="/vanarsdel/assigned-to-you"
        >
          Assigned to you
        </HorizentalTab>
      </ul>
    </div>
  );
}

export default HorizentalTabList;
