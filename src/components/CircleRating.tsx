type CircleRatingProps = {
  rating: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
};

export default function CircleRating({
  rating,
  max = 5,
  size = 80,
  strokeWidth = 4,
}: CircleRatingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (rating / max) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFA439"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // start at top
        />
      </svg>
      {/* Rating Text in Center */}
      <div className="absolute inset-0 flex items-center justify-center font-semibold text-[#0B0F0E] text-[1.25rem]">
        {rating.toFixed(1)}
      </div>
    </div>
  );
}
