type DashedLineProps = {
  children: React.ReactNode;
};

function CustomBorder({ children }: DashedLineProps) {
  return (
    <div className="rounded-md mt-6 border-[1px] border-dashed h-fit border-[#BBBBBB]">
      {children}
    </div>
  );
}

export default CustomBorder;
