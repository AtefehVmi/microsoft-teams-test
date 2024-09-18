import ButtonsStack from "./ButtonsStack";
import TitleStack from "./TitleStack";
import VanArsdelLogo from "./VanArsdelLogo";

function AppHeader() {
  return (
    <div className="w-[1298px] h-[60px] bg-neutralBackground1 flex items-center justify-between px-[20px]">
      <div className="flex items-center justify-center gap-[12px]">
        <VanArsdelLogo />

        <TitleStack />
      </div>
      <ButtonsStack />
    </div>
  );
}

export default AppHeader;
