import { useState } from "react";
import arrowup from "../assets/arrowup.png";

export default function ReviewTopics() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div className="mt-6">
      <button
        onClick={toggleCollapse}
        className="flex justify-between items-center w-full font-semibold text-lg mb-4"
        aria-expanded={!collapsed}
        aria-controls="rating-list"
      >
        <span>Review Topics</span>
        <span
          className={`transform transition-transform duration-300 ${
            collapsed ? "rotate-0" : "rotate-180"
          }`}
          aria-hidden="true"
        >
          <img src={arrowup} className="w-3 h-3" alt="arrow" />
        </span>
      </button>

      {!collapsed && (
        <div id="rating-list" className="flex flex-col gap-3">
          {[
            "Product Quality",
            "Seller Services",
            "Product Price",
            "Shipment",
            "Match with Description",
          ].map((topic) => (
            <label
              key={topic}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input type="checkbox" className="w-5 h-5" />

              <span className="text-base font-semibold text-rating">
                {topic}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
