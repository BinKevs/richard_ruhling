import { Outlet, Link } from "react-router-dom";

import React, { useState } from "react";

const NavBar = () => {
  const [hamBurgetState, setHamBurgetState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  return (
    <>
      <nav class=" fixed w-full z-50 bg-white shadow-xl py-4">
        <div class=" flex  justify-center items-center mx-auto">
          <div class="flex justify-between w-[80%]">
            <span class="md:text-5xl text-xl font-semibold my-auto">
              <span class="text-[#800000]"> Dr</span> Richard{" "}
              <span class="text-[#800000]">Ruhling</span>
            </span>
            <div class="justify-center flex">
              <ul class="flex p-4 text-black justify-center w-full text-lg">
                <li>
                  <Link to="/" class="py-2 pr-4 pl-3 " aria-current="page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="author" class=" py-2 pr-4 pl-3  ">
                    Author
                  </Link>
                </li>
                <li>
                  <Link to="book" class=" py-2 pr-4 pl-3  ">
                    Book
                  </Link>
                </li>
                <li>
                  <Link to="reviews" class=" py-2 pr-4 pl-3  ">
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
