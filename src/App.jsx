import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";
import Home from "./pages/Home";
import GalleryGray from "./pages/GalleryGray";
import GalleryBlur from "./pages/GalleryBlur";
import Navbar from "./container/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <figure className="flex justify-center items-center w-full">
              <MoonLoader color="#36d7b7" size={60} />
            </figure>
          }
        >
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<GalleryGray />} path="gallery-gray" />
            <Route element={<GalleryBlur />} path="gallery-blur" />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
