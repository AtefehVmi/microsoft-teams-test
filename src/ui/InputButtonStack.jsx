import ButtonArrows from "./ButtonArrows";
import SearchBar from "./SearchBar";

function InputButtonStack() {
  return (
    <div className="flex items-center justify-center gap-[16px]">
      <ButtonArrows />
      <SearchBar />
    </div>
  );
}

export default InputButtonStack;
