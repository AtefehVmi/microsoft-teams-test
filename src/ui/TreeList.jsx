import { useState } from "react";
import TreeItem from "./TreeItem";

function TreeList() {
  const [activeItem, setActiveItem] = useState("Option 2");
  const [isToggleOption, setIsToggleOption] = useState(true);

  function handleClick(name) {
    setActiveItem(name);

    if (name === "Option 2") {
      setIsToggleOption(!isToggleOption);
    }
  }

  return (
    <ul className="flex flex-col items-start self-stretch gap-[2px] w-[175px] h-[32px]">
      <TreeItem
        name="Group title"
        isActive={activeItem === "Group title"}
        onClick={() => handleClick("Group title")}
      />
      <TreeItem
        name="Option"
        isActive={activeItem === "Option 1"}
        onClick={() => handleClick("Option 1")}
      />
      <TreeItem
        name="Option"
        isActive={activeItem === "Option 2"}
        onClick={() => handleClick("Option 2")}
      />
      {isToggleOption && (
        <>
          <TreeItem
            name="Item"
            isActive={activeItem === "Item 1"}
            onClick={() => handleClick("Item 1")}
          />
          <TreeItem
            name="Item"
            isActive={activeItem === "Item 2"}
            onClick={() => handleClick("Item 2")}
          />
          <TreeItem
            name="Item"
            isActive={activeItem === "Item 3"}
            onClick={() => handleClick("Item 3")}
          />
          <TreeItem
            name="Item"
            isActive={activeItem === "Item 4"}
            onClick={() => handleClick("Item 4")}
          />
          <TreeItem
            name="Item"
            isActive={activeItem === "Item 5"}
            onClick={() => handleClick("Item 5")}
          />
        </>
      )}
    </ul>
  );
}

export default TreeList;
