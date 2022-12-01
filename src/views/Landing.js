import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/megaQuake2023.jpg";
import authorRuhling from "../assets/authorRuhling.jpg";
import kindleMegaQuake from "../assets/kindleMegaQuake.png";
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
					<div className="md:text-7xl text-5xl font-bold z-[991]">
						MegaQuake 2023
						<div className="md:text-2xl text-lg font-semibold my-4">
							How 3 Timelines and 7
							Events Signal
							Apocalyptic Times
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
						<div class="border-2 border-black rounded-lg bg-white text-md px-5 md:py-2.5 py-3.5 max-w-[290px] my-4 mx-auto">
							<div className="text-md font-semibold">
								BUY "MegaQuake
								2023 HERE"
							</div>
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
					<div className="top-1/4 left-10 z-[-5] md:absolute md:block hidden">
						<img
							src={flockBirds}
							className="max-w-[500px] opacity-50"
							alt=""
						/>
					</div>
					<div className="absolute top-[40%] right-10 z-[-5] absolute md:block hidden">
						<img
							src={flockBirds}
							className="max-w-[700px] opacity-50"
							alt=""
						/>
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
			<div className="w-[80%]  mx-auto my-[100px]">
				<div className="my-[100px] space-y-8">
					<div className="md:text-5xl text-3xl font-light flex md:flex-row flex-col">
						<span className="mr-4">
							Grab a copy now at
						</span>
						<img
							className=" pt-[6px]"
							src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
							alt=""
						/>
					</div>
					<div className="flex md:flex-row flex-col justify-center md:space-x-8">
						<div className="flex md:flex-row flex-col">
							{" "}
							<img
								src={
									kindleMegaQuake
								}
								className="w-[300px] md:p-0 p-10"
								alt=""
							/>
							<a
								className="my-auto md:px-0 px-10"
								href="https://www.amazon.com/MegaQuake-2023-Timelines-Events-Apocalyptic-ebook/dp/B09W1XVVMV/ref=cm_cr_arp_d_product_top?ie=UTF8"
								target="_blank"
								rel="noreferrer"
							>
								<div class="border-2 border-black rounded-lg bg-white text-md px-5 md:py-2.5 py-3.5 max-w-[290px] mx-auto">
									<div className="text-md font-semibold">
										Kindle
									</div>
									<div className="text-[#B12704] font-bold text-sm">
										{" "}
										$0.00{" "}
										<span className="text-[#FDCF91]">
											Kindle
										</span>{" "}
										<span className="text-black">
											{" "}
											Unlimited
										</span>{" "}
									</div>
								</div>
							</a>
						</div>
						<div className="flex md:flex-row flex-col md:space-x-4">
							<img
								src={
									bookMegaQuake
								}
								className="w-[350px] md:p-0 p-12"
								alt=""
							/>
							<a
								className="my-auto md:px-0 px-12"
								href="https://www.amazon.com/Mega-Quake-2023-Timelines-Apocalyptic/dp/B0B6XL2ST8/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
								target="_blank"
								rel="noreferrer"
							>
								<div class="border-2 border-black rounded-lg bg-white text-md px-5 md:py-2.5 py-3.5 max-w-[270px] mx-auto">
									<div className="text-md font-semibold">
										Paperback
									</div>
									<div className="text-[#B12704] font-bold text-sm">
										{" "}
										$7.95
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="md:text-5xl text-3xl font-light md:my-auto my-4 md:w-1/2">
					<div className="my-auto">
						Watch on You
						<span className="p-1 bg-[#FF0000] text-white rounded-3xl px-2 ml-1">
							Tube
						</span>
					</div>
				</div>
				<div className="flex md:flex-row flex-col justify-center">
					<div>
						<iframe
							className="rounded-2xl mx-auto md:w-[550px] md:h-[450px] h-[250px] md:p-10 p-2"
							src="https://www.youtube.com/embed/y83Yqa9XAA8"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div className="">
						<iframe
							className="rounded-2xl mx-auto md:w-[550px] md:h-[450px] h-[250px] md:p-10 p-2"
							src="https://www.youtube.com/embed/ZEU-Kj1UJ-Q?start=42"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
			<div className="relative flex font-light">
				<div className="w-[80%] m-auto">
					<div className="">
						<div className="">
							<div className="md:text-5xl text-3xl py-8">
								Richard Ruhling
								| MegaQuake 2023
							</div>
							<div className="flex md:flex-row flex-col justify-between ">
								<div>
									<img
										src={
											authorRuhling
										}
										className="md:max-w-[700px] shadow-2xl md:mr-16"
										alt=""
									/>
								</div>
								<div className="md:text-left text-justify text-lg md:w-[50%] md:my-auto my-4">
									Dr.
									Richard
									Ruhling:
									After
									Internal
									Medicine
									training
									and
									board
									certification,
									Ruhling
									had a
									Cardiology
									Fellowship
									before
									teaching
									at Loma
									Linda's
									School
									of
									Public
									Health.
									Attending
									a
									cardiology
									convention,
									he heard
									Pritikin
									reporting
									how a
									low fat,
									low
									cholesterol
									diet
									reversed
									heart
									disease
									and got
									85% of
									patients
									off
									their
									drugs
									for
									diabetes
									and
									blood
									pressure.
									<Link
										to="author"
										className="text-xl my-4 text-[#800000] flex"
									>
										Read
										More{" "}
										<IconContext.Provider
											value={{
												size: "1.8em",
											}}
										>
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
					<div>
						<div className="">
							<div className="md:text-5xl text-3xl py-8 flex">
								Physician's New
								Book Explores
								Potential
								Apocalyptic
								Events in
								America
								{/* |
              <img
                className="bg-black ml-2 my-auto"
                src="https://www.24-7pressrelease.com/assets/img/logo-light-footer.png"
                alt=""
              /> */}
							</div>
							<div className="flex justify-between text-justify">
								<div className="text-xl font-light">
									LOS
									ANGELES
									–
									November
									27, 2022
									–Retired
									physician
									Richard
									Ruhling,
									MD, MPH,
									has
									written
									a new
									book
									exploring
									potential
									apocalyptic
									events
									in
									America.
									Dr.
									Ruhling,
									who has
									also
									taught
									Health
									Science
									at Loma
									Linda
									University,
									believes
									that
									current
									events
									are
									signaling
									end-times
									for
									America.
									The
									book,
									”MegaQuake
									2023:
									How 3
									Timelines
									and 7
									Events
									Signal
									Apocalyptic
									Times”
									(White
									Horse
									Series
									Book 2),
									looks at
									Bible
									prophecy
									and how
									it
									relates
									to what
									is
									happening
									in the
									world
									today.
									<br />
									<br />
									Dr.
									Ruhling
									writes
									on
									current
									events
									and
									predicted
									war with
									Iraq
									before
									9/11,
									based on
									Daniel’s
									“vision
									at the
									time of
									the end”
									in the
									Bible
									that
									includes
									conflict
									with the
									Medes
									and
									Persians
									that are
									now Iraq
									and
									Iran.
									<Link
										to="reviews"
										className="text-xl my-4 text-[#800000] flex"
									>
										Read
										More{" "}
										<IconContext.Provider
											value={{
												size: "1.8em",
											}}
										>
											<AiOutlineRight />
										</IconContext.Provider>
									</Link>
								</div>
							</div>
						</div>
						<div className="">
							<div className="md:text-5xl text-3xl py-8 flex">
								"The Bride Groom
								Comes"
								{/* |
              <img
                className="bg-black ml-2 my-auto"
                src="https://www.24-7pressrelease.com/assets/img/logo-light-footer.png"
                alt=""
              /> */}
							</div>
							<div className="flex justify-between text-justify">
								<div className="text-xl font-light">
									Seismologists
									say the
									San
									Andreas
									is 80
									years
									overdue
									and
									could
									unload
									anytime.
									Dr.
									Richard
									Ruhling,
									author
									on
									current
									events
									and
									Bible
									prophecy
									cites
									seven
									events
									in 2015
									that
									gave us
									a 7-year
									warning,
									like
									Joseph
									gave to
									Pharaoh
									in
									Genesis
									41, and
									he adds
									that the
									US is a
									lot like
									Egypt
									then.
									<Link
										to="reviews"
										className="text-xl my-4 text-[#800000] flex"
									>
										Read
										More{" "}
										<IconContext.Provider
											value={{
												size: "1.8em",
											}}
										>
											<AiOutlineRight />
										</IconContext.Provider>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;
