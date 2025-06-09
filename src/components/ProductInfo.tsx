import { formatEGPWithPound } from "../utils/helpers";
import DOMPurify from "dompurify";
import star from "../assets/star.png";
import DashedLine from "./DashedLine";
import ProductDescription from "./ProductDescription";
import Colors from "./Colors";
import Size from "./Size";
import CartButtons from "./CartButtons";
import { useCartStore } from "../stores/cartStore";
import { useProductStore } from "../stores/productStores";
import { SetStateAction, useState } from "react";
type ProductData = {
  id: string;
  name: string;
  price: number;
  sale_price?: number | undefined;
  description: string;
  variants: any;
};

type ProductInfoProps = {
  data: ProductData;
  isLoading: boolean;
  error?: unknown;
};

function ProductInfo({ data, isLoading, error }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const selected = useProductStore((state) => state.selectedVariations);
  const setSelected = useProductStore((state) => state.setSelectedVariation);

  // handle quantity selector if change
  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
    setSelected("quantity", e.target.value);
  };
  if (isLoading) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <div className="w-full h-[400px] rounded-lg bg-gray-100 animate-pulse" />
        <div className="flex gap-3 mt-4 justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-16 w-16 bg-gray-100 rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-4">
        Failed to load product info.
      </div>
    );
  }
  return (
    <div className="flex-1 mt-14 md:mt-0">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-graysecondary text-[13px] md:text-base font-medium text-nowrap mb-3">
                John Lewis ANYDAY
              </p>
              <h1 className="font-semibold text-[23px] md:text-[36px] text-darkText leading-[120%] tracking-[-0.5%]">
                {data.name}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {typeof data.sale_price === "number" && (
                  <p className="text-grayPrice line-through font-medium text-sm md:text-[18px] leading-[120%]">
                    {formatEGPWithPound(
                      selected.sale_price !== undefined
                        ? Number(selected.sale_price)
                        : data.sale_price
                    )}
                  </p>
                )}
                {typeof data.price === "number" && (
                  <p className="text-darkPrice font-semibold text-[1.25rem] md:text-[28px] leading-[120%]">
                    {formatEGPWithPound(
                      selected.price !== undefined
                        ? Number(selected.price)
                        : data.price
                    )}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <p className="text-grayPrice  font-normal text-base md:text-[20px] leading-[120%] text-nowrap">
                  <span>{new Number(1200).toLocaleString()}</span> Sold
                  <span className="text-[##E0E0E0] mx-2">•</span>{" "}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={star}
                    alt="star"
                    className="h-5 md:h-6 w-5 md:w-6"
                  />
                  <p className="font-semibold text-darkPrice text-[1.25rem] md:text-[24px]">
                    4.6
                  </p>
                </div>
              </div>
            </div>
            <DashedLine />
          </div>
          <div className="flex flex-col gap-10">
            <div className="">
              <h2 className="mb-[10px] font-bold text-[1.125rem] md:text-[1.25rem]">
                Description:
              </h2>
              <p>{<ProductDescription description={data.description} />}</p>
            </div>
            <div>
              <Colors variants={data.variants} />
              <Size variants={data.variants} />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-semibold">Qunatity: </p>
              <input
                className="p-1 border border-grayprimary rounded-lg"
                type="number"
                name="quantity"
                id=""
                min={1}
                max={100}
                value={quantity}
                onChange={(e) => handleChangeQuantity(e)}
              />
            </div>
            <div>
              <CartButtons data={data} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductInfo;
