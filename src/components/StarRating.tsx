import star from "../assets/star2.png";

type Props = {
  rating: number; // e.g. 4.3
  size?: number; // default: 24
};

export default function StarRating({ rating, size = 20 }: Props) {
  const MAX_STARS = 5;
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${star})`,
    backgroundSize: "cover",
  };

  return (
    <div className="relative flex items-center gap-2">
      {/* Empty base layer */}
      <div className="flex gap-[2px]">
        {Array.from({ length: MAX_STARS }).map((_, idx) => (
          <div
            key={idx}
            style={{
              ...starStyle,
              opacity: 0.2, // empty star
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-0 left-0 flex gap-[2px] overflow-hidden"
        style={{
          width: `${(rating / MAX_STARS) * 100}%`,
        }}
      >
        {Array.from({ length: MAX_STARS }).map((_, idx) => (
          <div
            key={idx}
            style={{
              ...starStyle,
            }}
          />
        ))}
      </div>
    </div>
  );
}
