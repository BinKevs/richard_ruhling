import { Outlet, Link } from "react-router-dom";

import React, { useState } from "react";

const NavBar = () => {
  const [hamBurgetState, setHamBurgetState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  return (
    <>
      <nav class=" fixed w-full z-50 bg-white">
        <div class=" flex  justify-center items-center mx-auto">
          <div class="">
            <span class="md:text-7xl text-xl font-semibold ">
              <span class="text-[#EA0000]"> Dr</span> Richard{" "}
              <span class="text-[#EA0000]">Ruhling</span>
            </span>
            <div class=" w-full justify-center flex">
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
                  <Link to="review" class=" py-2 pr-4 pl-3  ">
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
