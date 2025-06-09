import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/productStores";

type Variant = {
  variation_props: {
    id: string;
    variation_prop: number;
  }[];
};

function Size({ variants }: { variants: Variant[] }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const setSelected = useProductStore((state) => state.setSelectedVariation);
  // Get unique sizes from variation_props[1] (Remove dublicate)
  const uniqueSizes = Array.from(
    new Map(
      variants.map((v) => [
        v.variation_props[1].variation_prop,
        v.variation_props[1],
      ])
    ).values()
  );

  // default select the first size on initial load
  useEffect(() => {
    if (!selectedSize && uniqueSizes.length > 0) {
      setSelectedSize(uniqueSizes[0].variation_prop);
      setSelected("size", uniqueSizes[0].variation_prop.toString());
    }
  }, [uniqueSizes, selectedSize]);

  const handleSelect = (size: number) => {
    setSelectedSize(size);
    console.log("Selected size:", size);
  };

  return (
    <div className="flex flex-col gap-3 mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-[1.125rem] md:text-[1.25rem] font-medium text-graysecondary">
          Size:{" "}
          <span className="text-[#292929] font-semibold">
            {selectedSize !== null ? selectedSize : "None"}
          </span>
        </h3>
        <Link to="/" className="text-grayLink underline font-medium">
          View Size Chart
        </Link>
      </div>

      {/* Size buttons */}
      <div className="flex flex-wrap gap-3">
        {uniqueSizes.map((sizeObj) => {
          const size = sizeObj.variation_prop;
          const isSelected = selectedSize === size;

          return (
            <button
              key={sizeObj.id}
              onClick={() => {
                handleSelect(size);
              }}
              className={`w-[74px] h-10 rounded-lg border text-[20px] font-semibold transition duration-300 ${
                isSelected
                  ? "bg-[#EBEBEB] border-[#333333] text-darkPrice ring-1 ring-darkPrice"
                  : "bg-white border-[#E6E6E6] text-grayLink"
              }`}
              title={size.toString()}
              style={{ outlineOffset: "3px" }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Size;
