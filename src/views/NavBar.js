import { Outlet, Link } from "react-router-dom";

import React, { useState } from "react";

const NavBar = () => {
  const [hamBurgetState, setHamBurgetState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  return (
    <>
      <nav class=" fixed w-full z-50 bg-white shadow-xl py-4">
        <div class=" flex  justify-center items-center mx-auto">
          <div class="flex md:flex-row flex-col justify-between w-[80%]">
            <span class="md:text-5xl text-2xl font-semibold my-auto md:mx-0 mx-auto">
              <span class="text-[#800000]"> Dr</span> Richard{" "}
              <span class="text-[#800000]">Ruhling</span>
            </span>
            <div class="justify-center flex">
              <ul class="flex md:p-4 p-1 text-black justify-center w-full md:text-lg text-md md:space-x-8 space-x-5">
                <li>
                  <Link to="/" class="py-2 " aria-current="page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="author" class=" py-2  ">
                    Author
                  </Link>
                </li>
                <li>
                  <Link to="book" class=" py-2  ">
                    Book
                  </Link>
                </li>
                <li>
                  <Link to="reviews" class=" py-2 ">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
