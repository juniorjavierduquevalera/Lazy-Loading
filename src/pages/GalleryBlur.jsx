import React, { lazy } from "react";
import { Helmet } from "react-helmet";
const PhotosBlur = lazy(() => import("../components/PhotosBlur"));

const GalleryGray = () => {
  return (
    <>
      <Helmet title="PhotosBlur" />
      <PhotosBlur />
    </>
  );
};
export default GalleryGray;
