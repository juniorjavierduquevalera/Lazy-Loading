import React, { lazy } from "react";
import { Helmet } from "react-helmet";
const PhotosGray = lazy(() => import("../components/PhotosGray"));

const GalleryGray = () => {
  return (
    <>
      <Helmet title="PhotosGray" />
      <PhotosGray />
    </>
  );
};
export default GalleryGray;
