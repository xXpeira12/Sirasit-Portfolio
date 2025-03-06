import React, { useState, useEffect, useRef } from "react";

const Work_Image = ({ picture, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!picture || picture.length === 0) {
    return null;
  }

  const isMultiple = picture.length > 1;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % picture.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? picture.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-5/6 mx-auto mt-3">
      <div className="bg-primaryAccent p-0.5 rounded-lg">
        <img
          src={picture[currentIndex]}
          alt={title}
          className="object-scale-down rounded-md w-full"
        />
      </div>

      {isMultiple && (
        <div className="w-full mt-2 flex justify-center items-center space-x-4">
            <button
                onClick={() => {
                    prevImage();
                }}
                className="bg-white bg-opacity-30 text-black px-2 rounded-full text-sm h-4 w-6 flex items-center justify-center"
                >
                &larr;
            </button>

            <div className="flex space-x-2">
                {picture.map((_, index) => (
                <div
                    key={index}
                    onClick={() => {
                    setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                ></div>
                ))}
            </div>

            <button
                onClick={() => {
                    nextImage();
                }}
                className="bg-white bg-opacity-30 text-black px-2 rounded-full text-sm h-4 w-6 flex items-center justify-center"
                >
                &rarr;
            </button>
        </div>
      )}
    </div>
  );
};

export default Work_Image;