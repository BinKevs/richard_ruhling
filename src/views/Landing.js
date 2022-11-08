import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/megaQuake2023.jpg";
import authorRuhling from "../assets/authorRuhling.jpg";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";

import { Outlet, Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div
        className={`bg-[url('./assets/buildingShadow.png')] h-screen bg-cover bg-no-repeat flex justify-center items-center relative `}
      >
        <div className="text-center">
          <div className="text-7xl font-bold z-[991]">
            MegaQuake 2023
            <div className="text-2xl font-semibold my-4">
              How 3 Timelines and 7 Events Signal Apocalyptic Times
            </div>
          </div>
          {/* <div>
            {" "}
            <img
              className="max-w-[300px] mx-auto border-2 border-black"
              src={bookMegaQuake}
              alt=""
            />
          </div> */}
          <a
            href="https://www.amazon.com/MegaQuake-2023-Timelines-Events-Apocalyptic-ebook/dp/B09W1XVVMV/ref=cm_cr_arp_d_product_top?ie=UTF8"
            target="_blank"
            rel="noreferrer"
          >
            <div class="border-2 border-black rounded-lg bg-white text-md px-5 md:py-2.5 py-3.5 max-w-[250px] my-4 mx-auto">
              <img
                className="pt-2 "
                src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                alt=""
              />
            </div>
          </a>
          {/* <div className="z-[9999]">
            <img
              src={bookMegaQuake}
              className="max-w-[250px] mx-auto "
              alt=""
            />
          </div> */}
          <div className="absolute top-1/4 left-10 z-[-5]">
            <img src={flockBirds} className="max-w-[500px] opacity-50" alt="" />
          </div>
          <div className="absolute top-[40%] right-10 z-[-5]">
            <img src={flockBirds} className="max-w-[700px] opacity-50" alt="" />
          </div>
        </div>

        {/* <div className=" relative">
         
          <div className="text-7xl font-bold w-[700px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl ">
            MegaQuake 2023
            <div className="text-3xl w-[450px] font-semibold my-4">
              How 3 Timelines and 7 Events Signal Apocalyptic Times
            </div>
          </div>
        </div>
        <div className="">
          <img src={bookMegaQuake} className="max-w-[350px]" alt="" />
        </div> */}
      </div>
      <div className="w-[80%] flex mx-auto my-[100px]">
        <div className="text-5xl font-bold my-auto w-1/2">
          <div className="mr-4 my-auto">
            Watch on You
            <span className="p-1 bg-[#FF0000] text-white rounded-3xl px-2 ml-1">
              Tube
            </span>
          </div>
        </div>
        <div className="">
          <iframe
            width="660"
            height="415"
            className="rounded-2xl mx-auto"
            src="https://www.youtube.com/embed/ZEU-Kj1UJ-Q?start=42"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="relative flex font-light">
        <div className="w-[80%] m-auto">
          <div className="">
            <div className="">
              <div className="text-5xl py-8">
                Richard Ruhling | MegaQuake 2023
              </div>
              <div className="flex justify-between ">
                <div>
                  <img
                    src={authorRuhling}
                    className="max-w-[700px] shadow-2xl mr-16"
                    alt=""
                  />
                </div>
                <div className="text-left text-lg w-[50%] my-auto">
                  Dr. Richard Ruhling: After Internal Medicine training and
                  board certification, Ruhling had a Cardiology Fellowship
                  before teaching at Loma Linda's School of Public Health.
                  Attending a cardiology convention, he heard Pritikin reporting
                  how a low fat, low cholesterol diet reversed heart disease and
                  got 85% of patients off their drugs for diabetes and blood
                  pressure.
                  <Link
                    to="reviews"
                    className="text-xl my-4 text-[#800000] flex"
                  >
                    Read More{" "}
                    <IconContext.Provider value={{ size: "1.8em" }}>
                      <AiOutlineRight />
                    </IconContext.Provider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex font-light mt-[100px]">
        <div className="w-[80%] m-auto flex justify-between space-x-8">
          <div className="">
            <div className="text-5xl py-8 flex">
              24-7 Press Release
              {/* |
              <img
                className="bg-black ml-2 my-auto"
                src="https://www.24-7pressrelease.com/assets/img/logo-light-footer.png"
                alt=""
              /> */}
            </div>
            <div className="flex justify-between text-justify">
              <div className="text-xl font-normal">
                While much of the information derived from divination are
                concerned with "what" will occur, what is more interesting to
                modern followers of prophecy are the questions of "where" and
                "when", with an emphasis on "end-times" prophecies.
                <Link to="reviews" className="text-xl my-4 text-[#800000] flex">
                  Read More{" "}
                  <IconContext.Provider value={{ size: "1.8em" }}>
                    <AiOutlineRight />
                  </IconContext.Provider>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
