import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const images = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

  return (
    <>
      <figure className="flex flex-wrap justify-center gap-2">
        {images.map((item) => (
          <LazyLoadImage
            effect="blur"
            key={item}
            src={`https://picsum.photos/300/300?random=${item}`}
          />
        ))}
      </figure>
    </>
  );
};
export default Gallery;
