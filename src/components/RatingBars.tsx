import star from "../assets/star2.png";

type RatingDistribution = {
  [rating: number]: number;
};

type RatingBreakdownProps = {
  ratings: RatingDistribution;
};

export default function RatingBars({ ratings }: RatingBreakdownProps) {
  const maxRating = 5;
  const total = Object.values(ratings).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col gap-2 w-full  justify-between mt-6 md:mt-0">
      {[5, 4, 3, 2, 1].map((rate) => {
        const count = ratings[rate] || 0;
        const percent = total ? (count / total) * 100 : 0;

        return (
          <div key={rate} className="flex items-center gap-2">
            {/* Stars */}
            <div className="flex gap-2 justify-between items-center mr-4">
              <p className="text-blackRate font-medium text-[1rem]">
                {rate.toFixed(1)}
              </p>
              <img src={star} alt="star" className="w-4 h-4 object-contain" />
            </div>

            {/* Progress Bar */}
            <div className="flex-1 h-2 bg-[#E4E9EE] rounded-full overflow-hidden">
              <div
                className="h-full bg-blackRate rounded-full"
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* Count */}
            <div className="text-blackRate font-medium text-[1rem] w-20">
              {count.toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
