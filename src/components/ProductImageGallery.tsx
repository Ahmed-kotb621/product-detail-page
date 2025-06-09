import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import arrowRight from "../assets/arrowright.png";
import arrowLeft from "../assets/arrowleft.png";
import share from "../assets/share.png";
import favorite from "../assets/favorite.png";

type ProductData = {
  variations: {
    props: { value: string }[];
  }[];
};

type ImageGalleryProps = {
  data: ProductData;
  isLoading: boolean;
  error: unknown;
};

export default function ProductImageGallery({
  data,
  isLoading,
  error,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data?.variations[0]?.props || [];

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? prev : prev + 1));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images]);

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

  if (error || images.length === 0) {
    return (
      <div className="text-red-500 text-center py-4">
        Failed to load images.
      </div>
    );
  }

  return (
    <div className="flex-1 h-full justify-between flex-col">
      <div className="flex gap-8">
        {/* Main Zoom Image */}
        <div className="relative group">
          <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <Zoom>
              <img
                src={images[currentIndex].value}
                alt={`Product ${currentIndex + 1}`}
                loading="lazy"
                className="w-full h-full object-contain transition duration-300 ease-in-out bg-gray-100"
              />
            </Zoom>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="w-fit flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <button
              aria-label="Share"
              className="flex justify-center items-center bg-grayLight p-2 h-[52px] w-[52px] rounded-lg hover:bg-white transition-colors duration-200"
            >
              <img src={share} alt="Share" className="h-5 w-5" />
            </button>
            <button
              aria-label="Favorite"
              className="flex justify-center items-center bg-grayLight p-2 h-[52px] w-[52px] rounded-lg hover:bg-white transition-colors duration-200"
            >
              <img src={favorite} alt="Favorite" className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              aria-label="Previous image"
              className={`flex justify-center items-center p-2 h-[52px] w-[52px] rounded-lg transition-colors duration-200 ${
                currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-grayLight hover:bg-white"
              }`}
            >
              <img src={arrowLeft} alt="Previous" className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              aria-label="Next image"
              className={`flex justify-center items-center p-2 h-[52px] w-[52px] rounded-lg transition-colors duration-200 ${
                currentIndex === images.length - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-grayLight hover:bg-white"
              }`}
            >
              <img src={arrowRight} alt="Next" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 justify-center">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Select image ${i + 1}`}
            className={`relative rounded-md overflow-hidden transition-all duration-200 ${
              currentIndex === i
                ? "ring-2 ring-primary scale-105"
                : "hover:opacity-80 hover:ring-1 hover:ring-gray-300"
            }`}
          >
            <div className="absolute inset-0 bg-gray-100" />
            <img
              src={img.value}
              alt={`Thumbnail ${i + 1}`}
              className="relative z-10 h-16 w-16 object-contain bg-gray-100"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
