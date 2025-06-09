import { useState } from "react";
import { reviews } from "../data/product";
import StarRating from "./StarRating";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import DashedLine from "./DashedLine";

const REVIEWS_PER_PAGE = 3;

function Feedback() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const paginatedReviews = reviews.slice(
    startIndex,
    startIndex + REVIEWS_PER_PAGE
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="md:m-8 ">
      {paginatedReviews.map((el, index) => (
        <div key={index} className="flex flex-col gap-2 my-6">
          <StarRating rating={el.rate} />
          <h3 className="text-darkPrice font-semibold text-sm md:text-[1.125rem]">
            {el.review}
          </h3>
          <p className="md:text-sm text-[0.75rem] text-[#818B9C]">{el.date}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={el.avater}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-base font-medium text-darkPrice">{el.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button className="flex gap-2 items-center border border-[#E4E9EE] md:p-3 p-[10px] rounded-md md:rounded-lg">
                <img src={like} alt="like" className="h-6 w-6" />
                <p>{el.like}</p>
              </button>
              <button className="border border-[#E4E9EE] md:p-3 p-[10px] rounded-md md:rounded-lg">
                <img src={dislike} alt="dislike" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <DashedLine />
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isActive = currentPage === pageNumber;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`w-10 h-10 rounded-lg border  text-sm font-medium ${
                isActive
                  ? " text-darkPrice border-darkPrice"
                  : "text-gray-600 border-#E4E9EE hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;
