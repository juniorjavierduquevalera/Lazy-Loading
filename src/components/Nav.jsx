import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <nav className="fixed top-0 py-2 bg-slate-800 text-center w-full text-xl font-bold text-green-500 z-20">
          <Link className="px-3" to="">
            Home
          </Link>
          <Link to="gallery-blur">GalleryBlur</Link>
          <Link className="px-3" to="gallery-gray">
            GalleryGray
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
