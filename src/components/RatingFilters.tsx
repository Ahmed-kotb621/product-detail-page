import React, { useState } from "react";
import fullStar from "../assets/star2.png";
import arrowup from "../assets/arrowup.png";

type RatingFilterProps = {
  onChange?: (selected: number[]) => void;
};

export default function RatingFilter({ onChange }: RatingFilterProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  const toggleRating = (rating: number) => {
    let newSelected;
    if (selectedRatings.includes(rating)) {
      newSelected = selectedRatings.filter((r) => r !== rating);
    } else {
      newSelected = [...selectedRatings, rating];
    }
    setSelectedRatings(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className="my-6">
      <button
        onClick={toggleCollapse}
        className="flex justify-between items-center w-full font-semibold text-lg mb-4"
        aria-expanded={!collapsed}
        aria-controls="rating-list"
      >
        <span>Rating</span>
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
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                onChange={() => toggleRating(rating)}
                className="w-5 h-5"
              />
              <div className="flex gap-1">
                <img src={fullStar} alt="star" className="w-[18px] h-[18px]" />
              </div>
              <span className="text-base font-semibold text-rating">
                {rating}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
