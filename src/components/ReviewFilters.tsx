import DashedLine from "./DashedLine";
import RatingFilter from "./RatingFilters";
import ReviewTopics from "./ReviewTopics";

function ReviewFilters() {
  return (
    <div className="p-6 h-fit">
      <h2 className="font-semibold text-[1.25rem] text-lightDark mb-4">
        Reviews Filter
      </h2>
      <DashedLine />
      <RatingFilter />
      <DashedLine />
      <ReviewTopics />
    </div>
  );
}

export default ReviewFilters;
