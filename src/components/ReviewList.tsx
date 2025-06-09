import Feedback from "./Feedback";
import Tabs from "./Tabs";

function ReviewList() {
  return (
    <div className="mt-6">
      <h2 className="text-[1rem] md:text-[20px] font-semibold text-darkText mb-4">
        Review Lists
      </h2>
      <Tabs />
      <Feedback />
    </div>
  );
}

export default ReviewList;
