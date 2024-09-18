import InputButtonStack from "./InputButtonStack";
import Logo from "./Logo";

import RightControls from "./RightControls";

function TitleBar() {
  return (
    <header className="col-span-2 bg-neutralForeground2 w-[1366px] h-[48px] flex flex-shrink-0 items-center justify-between border-b border-neutralStrokeAlpha">
      <Logo />
      <InputButtonStack />
      <RightControls />
    </header>
  );
}

export default TitleBar;
