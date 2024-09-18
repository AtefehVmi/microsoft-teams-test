import HorizentalTabList from "./HorizentalTabList";
import Title from "./Title";

function TitleStack() {
  return (
    <div className="w-[372px] h-[52px] inline-flex items-start gap-[4px] mt-[7px] mb-[1px] relative">
      <Title />
      <HorizentalTabList />
    </div>
  );
}

export default TitleStack;
