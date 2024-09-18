import ButtonToolBar from "./ButtonToolBar";
import Divider from "./Divider";
import MenuButton from "./MenuButton";
import MenuButton2 from "./MenuButton2";

function StartContent() {
  return (
    <div className="flex items-center justify-start w-[992px] h-[32px]">
      <MenuButton />
      <MenuButton2 />
      <ButtonToolBar />
      <ButtonToolBar />
      <Divider />
      <ButtonToolBar />
      <ButtonToolBar />
      <ButtonToolBar />
      <Divider />
      <ButtonToolBar />
      <ButtonToolBar />
    </div>
  );
}

export default StartContent;
