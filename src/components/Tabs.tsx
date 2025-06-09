import { useState } from "react";

const tabItems = ["All Reviews", "Photos & Videos", "With Description"];

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("All Reviews");

  return (
    <div className="flex gap-3">
      {tabItems.map((el) => (
        <button
          key={el}
          onClick={() => setSelectedTab(el)}
          className={`pb-2 text-[0.75rem] md:text-sm font-medium transition-colors duration-200 text-darkPrice border-[1px] border-[#E6E6E6] px-[10px] md:px-[20px] py-[10px] rounded-md ${
            selectedTab === el
              ? "text-dark border-dark bg-[#EBEBEB]"
              : "text-darkPrice hover:text-grayLink"
          }`}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
