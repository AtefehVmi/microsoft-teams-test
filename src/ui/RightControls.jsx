import ThreeDotIcon from "./ThreeDotIcon";
import Avatar from "./Avatar";
import WindowsControls from "./WindowsControls";

function RightControls() {
  return (
    <div className="flex items-center justify-center gap-[8px]">
      <ThreeDotIcon />
      <Avatar />
      <WindowsControls />
    </div>
  );
}

export default RightControls;
