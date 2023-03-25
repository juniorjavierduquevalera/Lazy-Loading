import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const Gallery = lazy(() => import("../components/Gallery"));

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <Gallery />
    </>
  );
};
export default Home;
