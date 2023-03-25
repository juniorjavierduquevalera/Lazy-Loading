import React, { lazy } from "react";
const Nav = lazy(() => import("../components/Nav"));

const Navbar = () => {
  return (
    <>
      <Nav />
    </>
  );
};
export default Navbar;
