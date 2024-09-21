import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

function Row() {
  return (
    <div className="h-[400px] flex items-start self-stretch gap-[12px]">
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default Row;
