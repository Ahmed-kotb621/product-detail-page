import { useState } from "react";
import { relatedProducts } from "../data/product";
import Card from "./Card";
import Rating from "./Rating";
import CircleRating from "./CircleRating";
import CustomBorder from "./CustomBorder";
import Reviews from "./Reviews";

function ProductReviews() {
  return (
    <div className="container mt-20 mb-20">
      <h2 className="text-darkPrice font-semibold text-[1.5rem] md:text-[1.75rem] leading-[120%]">
        Product Reviews
      </h2>
      <CustomBorder>
        <Rating />
      </CustomBorder>
      <Reviews />
    </div>
  );
}

export default ProductReviews;
