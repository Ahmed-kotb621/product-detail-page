import { useState, useEffect } from "react";
import { useProductStore } from "../stores/productStores";

type Variant = {
  price: number;
  sale_price?: number;
  variation_props: {
    id: string;
    variation_prop: string;
  }[];
};

function Colors({ variants }: { variants: Variant[] }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const setSelected = useProductStore((state) => state.setSelectedVariation);

  // Get unique colors
  const uniqueColors = Array.from(
    new Map(
      variants.map((v) => [
        v.variation_props[0].variation_prop.toLowerCase(),
        v.variation_props[0],
      ])
    ).values()
  );

  // Auto-select the first color and update price
  useEffect(() => {
    if (!selectedColor && uniqueColors.length > 0) {
      const defaultColor = uniqueColors[0].variation_prop;
      setSelectedColor(defaultColor);
      setSelected("color", defaultColor);

      // Find the variant that matches the default color
      const selectedVariant = variants.find((v) =>
        v.variation_props.some(
          (prop) =>
            prop.variation_prop.toLowerCase() === defaultColor.toLowerCase()
        )
      );

      const price =
        selectedVariant?.sale_price && selectedVariant.sale_price > 0
          ? selectedVariant.sale_price
          : selectedVariant?.price ?? 0;

      setSelected("price", price.toString());
      setSelected("sale_price", (selectedVariant?.sale_price || 0).toString());
      console.log(price);
    }
  }, [uniqueColors, selectedColor, variants, setSelected]);

  const handleSelect = (color: string) => {
    setSelectedColor(color);

    // Find the variant that has the selected color
    const selectedVariant = variants.find((v) =>
      v.variation_props.some(
        (prop) => prop.variation_prop.toLowerCase() === color.toLowerCase()
      )
    );

    // Use sale_price if available and > 0, otherwise fallback to price
    const price =
      selectedVariant?.sale_price && selectedVariant.sale_price > 0
        ? selectedVariant.sale_price
        : selectedVariant?.price ?? 0;

    setSelected("color", color);
    setSelected("price", price.toString());
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium  text-[1.125rem] md:text-[1.25rem] text-graysecondary ">
        Color:{" "}
        <span className="text-[#292929] font-semibold">
          {selectedColor ? selectedColor : "None"}
        </span>
      </h3>
      <div className="flex gap-3 flex-wrap">
        {uniqueColors.map((colorObj) => {
          const color = colorObj.variation_prop;
          const isSelected =
            selectedColor?.toLowerCase() === color.toLowerCase();

          return (
            <button
              key={colorObj.id}
              onClick={() => {
                handleSelect(color);
              }}
              className={`w-[74px] h-10 rounded-lg transition-all duration-300 ${
                isSelected
                  ? "shadow-[0_0_0_6px_white_inset] p-1 border border-darkPrice" // 2px inner shadow + padding
                  : "border border-gray-300 p-0"
              }`}
              style={{
                backgroundColor: color.toLowerCase(),
                outlineOffset: "3px",
              }}
              title={color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Colors;
