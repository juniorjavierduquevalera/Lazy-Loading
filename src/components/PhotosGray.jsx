import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PhotosGray = () => {
  const images = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
  return (
    <>
      <figure className="flex flex-wrap justify-center gap-2">
        {images.map((item) => (
          <LazyLoadImage
            key={item}
            effect="blur"
            src={`https://picsum.photos/300/300?grayscale&random=${item}`}
          />
        ))}
      </figure>
    </>
  );
};
export default PhotosGray;
