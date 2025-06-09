import { RelatedProducts } from "../types/product";
import star from "../assets/star2.png";
type CardProps = {
  product: RelatedProducts;
};
function Card({ product }: CardProps) {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" bg-grayLight overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={` ${product.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h3 className="font-semibold text-lightDark text-sm md:text-[1.125rem] ">
          {product.name}
        </h3>
        <h4 className="font-semibold text-lightDark text-base md:text-[1.25rem] ">
          ${product.price}
        </h4>
        <p className="font-normal text-grayDes text-[13px] md:text-[1rem] ">
          {product.description}
        </p>
        <div className="flex gap-[6px] items-center">
          <img src={star} alt="star rate" className="h-6 w-6" />
          <span className="text-[##0B0F0E] text-[1rem] font-normal">
            {product.rate}
          </span>
          <span className="md:text-[1rem] text-[0.75rem] font-normal text-grayPrice">
            {new Number(product.sold).toLocaleString()} Sold
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
