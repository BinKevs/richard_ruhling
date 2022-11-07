import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
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
      <div className="h-screen relative flex">
        <div className="w-[80%] m-auto">
          <div className="flex justify-between">
            <div className="w-[60%]">
              <div className="text-5xl font-bold py-8">
                Richard Ruhling | MegaQuake 2023
              </div>
              <div className="text-lg font-semibold w-[40%]">
                Dr. Richard Ruhling: After Internal Medicine training and board
                certification, Ruhling had a Cardiology Fellowship before
                teaching at Loma Linda's School of Public Health. Attending a
                cardiology convention, he heard Pritikin reporting how a low
                fat, low cholesterol diet reversed heart disease and got 85% of
                patients off their drugs for diabetes and blood pressure.
                <Link to="reviews" className="text-xl my-4 text-[#800000] flex">
                  Read More{" "}
                  <IconContext.Provider value={{ size: "1.8em" }}>
                    <AiOutlineRight />
                  </IconContext.Provider>
                </Link>
              </div>
            </div>
            <iframe
              width="660"
              height="415"
              className="my-auto rounded-2xl"
              src="https://www.youtube.com/embed/ZEU-Kj1UJ-Q?start=42"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-screen relative flex">
        <div className="w-[80%] m-auto flex justify-between space-x-8">
          <div className="w-1/2">
            <div className="text-5xl font-bold py-8 flex">
              24-7 Press Release |
              <img
                className="bg-black ml-2 my-auto"
                src="https://www.24-7pressrelease.com/assets/img/logo-light-footer.png"
                alt=""
              />
            </div>
            <div className="flex justify-between text-justify">
              <div className="text-lg font-semibold">
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
          <div className="w-1/2">
            <div className="text-5xl font-bold py-8 flex">
              Free Publicity Focus Group |
            </div>
            <div className="flex justify-between text-justify">
              <div className="text-lg font-semibold ">
                He says it’s doubly true when the economy could fold to wipe out
                prosperity. This is implied in the #1 best-selling book, the
                Bible, where we see the sequence of a [huge] earthquake followed
                by all the grass being burnt up.
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
