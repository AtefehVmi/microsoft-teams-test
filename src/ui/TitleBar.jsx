import InputButtonStack from "./InputButtonStack";
import Logo from "./Logo";

import RightControls from "./RightControls";

function TitleBar() {
  return (
    <div className="bg-neutralForeground2 w-[1366px] h-[48px] flex flex-shrink-0 items-center justify-between border-b border-neutralStrokeAlpha">
      <Logo />
      <InputButtonStack />
      <RightControls />
    </div>
  );
}

export default TitleBar;
