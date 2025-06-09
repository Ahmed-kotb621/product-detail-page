import CircleRating from "./CircleRating";
import RatingBars from "./RatingBars";
import StarRating from "./StarRating";
const ratings = {
  5: 1200,
  4: 800,
  3: 300,
  2: 100,
  1: 20,
};
function Rating() {
  return (
    <div className="grid md:grid-cols-6 grid-cols-2  gap-2 p-6">
      <div className="col-span-2 flex gap-4">
        <CircleRating rating={4.6} />
        <div className="mt-4">
          <StarRating rating={4.6} />
          <p className="md:text-[1rem] text-[0.75rem] font-normal text-grayLink mt-2">
            from 1,25k reviews
          </p>
        </div>
      </div>
      <div className=" md:col-span-4 col-span-2">
        <RatingBars ratings={ratings} />
      </div>
    </div>
  );
}

export default Rating;
