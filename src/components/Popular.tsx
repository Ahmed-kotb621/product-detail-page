import { useState } from "react";
import { relatedProducts } from "../data/product";
import Card from "./Card";

function Popular() {
  const [showAll, setShowAll] = useState(false);

  const productsToDisplay = showAll
    ? relatedProducts
    : relatedProducts.slice(0, 5);

  return (
    <div className="container mt-20 mb-20">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        <h2 className="text-darkPrice font-semibold text-[1.5rem] md:text-[1.75rem] leading-[120%]">
          Popular this week
        </h2>
        <span className="font-medium text-grayLink underline">
          {showAll ? "View Less" : "View All"}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 mt-6 gap-5 md:gap-8">
        {productsToDisplay.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
