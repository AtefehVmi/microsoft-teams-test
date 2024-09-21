import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

function Row2() {
  return (
    <div className="flex items-end self-stretch gap-[12px]">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

export default Row2;
