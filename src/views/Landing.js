import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";

function Landing() {
  return (
    <>
      <div
        className={`bg-[url('./assets/buildingShadow.png')] h-screen bg-cover bg-no-repeat flex justify-center relative `}
      >
        <div className="text-center pt-[240px]">
          <div className="text-7xl font-bold z-[991]">
            MegaQuake 2023
            <div className="text-2xl font-semibold my-4">
              How 3 Timelines and 7 Events Signal Apocalyptic Times
            </div>
          </div>
          <div className="z-[9999]">
            <img
              src={bookMegaQuake}
              className="max-w-[250px] mx-auto "
              alt=""
            />
          </div>
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
      <div className="h-screen relative">
        <div className="landing"></div>
      </div>
    </>
  );
}

export default Landing;
