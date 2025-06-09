function DashedLine() {
  return (
    <div className="container">
      <svg width="100%" height="1">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#A3A3A3"
          strokeWidth="0.5"
          strokeDasharray="6, 4"
        />
      </svg>
    </div>
  );
}

export default DashedLine;
