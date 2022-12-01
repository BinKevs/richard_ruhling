import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar, AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
function Review() {
	const [review, setReview] = useState([
		{
			message: "This is a nice collection of resources that can help anyone better prepare for what is inevitable. There is no future in abortion, homosexuality, greed, killing, poisonous drugs, or willful disobedience to the Creator.",
			creator: "	Donald Ayers",
		},
		{
			message: "This book clearly defines how the year 2023 is calculated for the “mega quake” – bringing in the (biblical) end of times. Using scripture references and methodical calculations brings this author, Richard Ruhling, to his conclusions as well stated in Mega Quake 2023. There will be a lot of nay-sayers that will not understand or accept what Ruhling has compiled within the pages of this book. However, there are more compelling reason to at least read the book. We are told in the bible to be prepared, to stay awake and be watchful. One cannot do that if they don’t know the signs or what they are watching for. Whether or not you believe everything that is written in this book, reading it can only help you understand what is coming – if not when.",
			creator: "HCTexas",
		},
		// {
		//   message:
		//     "The book Around the World in Five Lines takes you on an adventure. I bought this book for my grandchildren. When we read a limerick we google the location to find out more about the place. They love learning about different spots in the world.",
		//   creator: "GrannyBeBe",
		// },
		// {
		//   message:
		//     "Limerick writing is very precise, and follows regimented discipline. In just five lines, the author has to write a beginning middle and end to to this particular type of poetry. This book takes the reader on a journey not only around the world by naming new places, stating a predicament. and finally. a playful solution all in just fine lines. If you like to read different kinds of poetry, this is a great book.",
		//   creator: "Helena Graves",
		// },
		// {
		//   message:
		//     "Mr. Anstead's Around the World in 5 Lines is a treat for all lovers of the written word. He takes you to many unknown places around the world! It is humor mixed with geography a treat for the entire family!",
		//   creator: "Amazon Customer",
		// },
		// {
		//   message:
		//     "James is a very gifted gentleman who has used limericks to expose his love for language and the world. James has created vivid imagery in five lines. If you love traveling and language, this is a definite purchase.",
		//   creator: "Celeste Hill Brockett",
		// },
		// {
		//   message:
		//     "Around the World in Five Lines......loved it! Very sophisticated, showing a great deal of worldly experiences! The limericks in this book make you chuckle! Great read! Dawn",
		//   creator: "Dawn",
		// },
		// {
		//   message:
		//     "Reviewed in the United States on November 24, 2018 These limericks made me want to find out exactly where the cities and towns were located. It was alot of fun to share with family and friends.",
		//   creator: "Cullen",
		// },
		// {
		//   message:
		//     "A really fun gift I received this year the Adventures and the places you go in this book I love reading them to my kids",
		//   creator: "january",
		// },
		// {
		//   message:
		//     "Witty and fun. Must read. These five lines will take you to the corners of the world with excitement and comedy.",
		//   creator: "josh jones",
		// },
		// {
		//   message: "Very enjoyable read. Funny and smart!",
		//   creator: "Roger franxman",
		// },
		// {
		//   message: "Eclectic samples of life in five lines.",
		//   creator: "Timothy Mercer",
		// },
	]);
	return (
		<>
			<div className="w-[80%] mx-auto text-black pt-[88px] ">
				<div className="">
					<div className="md:text-7xl text-4xl font-light py-6">
						Physician's New Book Explores
						Potential Apocalyptic Events in
						America
					</div>
					<div className="md:w-[80%] mx-auto">
						<div className="flex md:flex-row flex-col md:space-x-8 ">
							{/* <div className="md:text-lg text-md flex">
                {" "}
                <IconContext.Provider
                  value={{
                    color: "#000000",
                    size: "2.0em",
                  }}
                >
                  <AiOutlineUser />
                </IconContext.Provider>
                <span className="my-auto ml-2">
                  Physician's New Book Explores Potential Apocalyptic Events in
                  America
                </span>
              </div> */}
							<div className="md:text-lg text-md flex">
								{" "}
								<IconContext.Provider
									value={{
										color: "#000000",
										size: "2.0em",
									}}
								>
									<AiOutlineCalendar />
								</IconContext.Provider>
								<span className="my-auto ml-2">
									November
									27, 2022
								</span>
							</div>
						</div>

						<div className="font-light text-justify mt-8 ">
							LOS ANGELES – November
							27, 2022 –Retired
							physician Richard
							Ruhling, MD, MPH, has
							written a new book
							exploring potential
							apocalyptic events in
							America. Dr. Ruhling,
							who has also taught
							Health Science at Loma
							Linda University,
							believes that current
							events are signaling
							end-times for America.
							The book, ”MegaQuake
							2023: How 3 Timelines
							and 7 Events Signal
							Apocalyptic Times”
							(White Horse Series Book
							2), looks at Bible
							prophecy and how it
							relates to what is
							happening in the world
							today.
							<br />
							<br />
							Dr. Ruhling writes on
							current events and
							predicted war with Iraq
							before 9/11, based on
							Daniel’s “vision at the
							time of the end” in the
							Bible that includes
							conflict with the Medes
							and Persians that are
							now Iraq and Iran.
							<br />
							<br />
							Dr. Ruhling claims that
							Daniel has a proven
							track record of matched
							history. Daniel was
							written hundreds of
							years before the events
							he speaks of, yet those
							predictions are
							incredibly accurate.
							<br />
							<br />
							“This shows that the
							author of Daniel was
							inspired by a higher
							power and had knowledge
							of future events that
							could not have been
							known through natural
							means,” Dr. Ruhling
							said.“Cyrus was named in
							the book of Isaiah,
							which was written around
							100 years before Cyrus
							was born. This is an
							incredible prophecy that
							was fulfilled to the
							letter. Cyrus was so
							impressed with Israel's
							God that he freed them
							to return to their
							homeland and even helped
							pay their way. This
							shows that God is still
							working in the world
							today and that He has a
							plan for all of us.
							Trump has been likened
							to Cyrus II for his help
							to Israel, and this
							shows that God is still
							working in the world
							today.
							<br />
							<br />
							"Scientists say the San
							Andreas is 80 years
							overdue, and with
							increasing seismic
							activity, it’s not hard
							to see trouble for the
							West Coast. The fires
							and high gas prices are
							an omen of the Golden
							State turning brown.
							Saying it could be
							tomorrow for the Big One
							means they don’t know
							when. The Bible has
							better information. Two
							thousand years ago, men
							ran to save their lives
							but were willing to die
							for Christ after He rose
							from the grave. They
							wouldn’t die for a lie –
							they must have seen
							Him!"
							<br />
							<br />
							Dr. Ruhling
							continued,"Muslims will
							flee, but the earthquake
							brings the end-times –
							the earthquake is
							encoded in four
							different ways in
							Revelation. God punished
							Egypt for enslaving
							Israel and throwing
							their babies in the
							river. The U.S. has the
							most people in bondage
							to alcohol, tobacco,
							drugs and negative
							lifestyles, and it has
							thrown 63 million babies
							in the trash. The Exodus
							was a jubilee event that
							later came every 50
							years. Fifty years from
							Roe v. Wade is 2023 –
							one of several
							timelines. Sixty-three
							million abortions
							deserve judgment worse
							than Egypt.”
							<br />
							<br />
							“MegaQuake 2023: How 3
							Timelines and 7 Events
							Signal Apocalyptic
							Times” is currently
							available on Amazon. For
							more information, visit
							TheBridegroomComes.wordpress.com.
						</div>
					</div>
				</div>
				<div className="">
					<div className="md:text-7xl text-4xl font-light py-6">
						"The Bridegroom Comes"
					</div>
					<div className="md:w-[80%] mx-auto">
						<div className="flex md:flex-row flex-col md:space-x-8 ">
							<div className="md:text-lg text-md flex">
								{" "}
								<IconContext.Provider
									value={{
										color: "#000000",
										size: "2.0em",
									}}
								>
									<AiOutlineUser />
								</IconContext.Provider>
								<span className="my-auto ml-2">
									"The
									Bridegroom
									Comes"
								</span>
							</div>
							<div className="md:text-lg text-md flex">
								{" "}
								<IconContext.Provider
									value={{
										color: "#000000",
										size: "2.0em",
									}}
								>
									<AiOutlineCalendar />
								</IconContext.Provider>
								<span className="my-auto ml-2">
									JULY 29,
									2022
								</span>
							</div>
						</div>

						<div className="font-light text-justify mt-8 ">
							{" "}
							Seismologists say the
							San Andreas is 80 years
							overdue and could unload
							anytime. Dr. Richard
							Ruhling, author on
							current events and Bible
							prophecy cites seven
							events in 2015 that gave
							us a 7-year warning,
							like Joseph gave to
							Pharaoh in Genesis 41,
							and he adds that the US
							is a lot like Egypt
							then.
							<br />
							<br />
							Egypt was the greatest
							nation as the US is now.
							Egypt enslaved Israel
							and the US has most
							people in bondage to
							negative lifestyles.
							Egypt threw babies in
							the river and the US has
							thrown 63 million babies
							in the trash. The Exodus
							was a jubilee event with
							freedom. Jubilee later
							came every 50 years. 50
							years from Roe v Wade is
							next year, 2023. This is
							one of several timelines
							explained in his book
							<br />
							<br />
							Speaking of the end-time
							“day of the Lord” that
							begins with a huge
							earthquake, the
							following signs marked
							2015 with their warning.
							<br />
							1. “The sun shall be
							darkened and the moon
							shall be turned to blood
							before the day of the
							day of the Lord” (Joel
							2:31) A rare solar
							eclipse on equinox and a
							blood moon on Passover,
							(time of judgment in
							Exodus 12:12) marked
							2015 and these were
							signs that only God
							could do—man has no
							control over the sun or
							the moon that were
							appointed for signs in
							Gen 1:14.
							<br />
							3. “The day of the Lord
							comes as a thief. When
							they say “peace and
							safety…sudden
							destruction comes,”
							1Thessalonians 5:2–3).
							The Iran Nuclear Treaty
							was “peace and safety”
							talk; the earthquake
							brings sudden
							destruction.
							<br />
							4. Christ said to flee
							when you see an
							abomination, “standing
							where it ought not,”
							Mark 13:14. Early
							believers understood the
							abomination to be Rome.
							They fled the city when
							they saw the Roman army
							under Cestius and were
							spared the siege by
							Titus in 70 AD, but
							there was a modern
							parallel with a JADE
							HELM drill Homeland
							Eradication of Local
							Militants to take
							guns—testing how martial
							law might do against US
							Second Amendment rights.
							History shows that
							dictators take the guns
							before big trouble.
							<br />
							5. Many Christians
							understand the new
							definition of marriage
							in 2015 as an
							abomination in Leviticus
							18:22. It was “standing
							where it ought not” in
							the Supreme Court, Mark
							13:14.
							<br />
							6. Matthew 24:15 has
							different wording—“when
							you see the abomination
							standing in the holy
							place.” The law was in
							the holy place of the
							temple and the pope came
							where laws are made for
							the US in Congress. We
							should see a parallel
							meaning. The pope ought
							not to be in Congress,
							Mark 13:14. The First
							Amendment says Congress
							shall make no laws
							respecting the
							establishment of
							religion. The pope’s
							Laudato Si’ seeks laws
							for Sunday to favor
							their eucharist.
							<br />
							Why should the pope tell
							us how to run the US? He
							should fix Latin America
							where they will do as he
							says. Why do they all
							want to come to the US
							for a better life?
							<br />
							7. The San Andreas movie
							was also in 2015. With
							the Outbreak movie being
							prophetic of the
							pandemic, why not the
							San Andreas movie
							because its timing was
							with the other signs
							that fit Joseph’s seven
							years of plenty before
							trouble.
							<br />
							<br />
							You get more information
							in MegaQuake 2023 for
							$7.95 on Amazon
							(soft-cover + shipping
							is $12), but for your
							$10 donation to Total
							Health, you can get the
							book AND a high-value
							bonus, a link to a video
							with Cleveland Clinic’s
							Dr. Esselstyn explaining
							how most diseases can be
							reversed without
							prescription drugs by
							eating wisely. We all
							know someone who has
							diabetes, cholesterol or
							high blood pressure.
							This video is worth
							thousands to people
							taking prescriptions
							that are also risky for
							health. To get your book
							and bonus for a $10
							donation. please contact
							Dr. Ruhling for speaking
							at Ruhling7@juno.com
						</div>
						<div className="text-lg my-4">
							Source :{" "}
							<a
								className=" cursor-pointer text-blue-600 font-bold"
								target="_Blank"
								href="https://thebridegroomcomes.wordpress.com/"
								rel="noreferrer"
							>
								www.thebridegroomcomes.wordpress.com/
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className="md:text-7xl text-5xl font-light py-6">
						Amazon
					</div>
					<div className="grid grid-cols-1 gap-6">
						{review.map((item, index) => {
							return (
								<div
									className="p-6 italic flex md:flex-row flex-col md:w-[80%] text-justify mx-auto"
									key={
										index
									}
								>
									<div className="flex flex-col justify-center items-center mr-4 ">
										{" "}
										<IconContext.Provider
											value={{
												color: "#808080",
												size: "5.5em",
											}}
										>
											<FaUserCircle />
										</IconContext.Provider>
										<div className="flex ">
											{" "}
											<IconContext.Provider
												value={{
													color: "#FF9900",
													size: "1.5em",
												}}
											>
												<AiFillStar />
											</IconContext.Provider>
											<IconContext.Provider
												value={{
													color: "#FF9900",
													size: "1.5em",
												}}
											>
												<AiFillStar />
											</IconContext.Provider>
											<IconContext.Provider
												value={{
													color: "#FF9900",
													size: "1.5em",
												}}
											>
												<AiFillStar />
											</IconContext.Provider>
											<IconContext.Provider
												value={{
													color: "#FF9900",
													size: "1.5em",
												}}
											>
												<AiFillStar />
											</IconContext.Provider>
											<IconContext.Provider
												value={{
													color: "#FF9900",
													size: "1.5em",
												}}
											>
												<AiFillStar />
											</IconContext.Provider>
										</div>
									</div>
									<div className=" flex items-center">
										<div className="">
											<div className="">
												"
												{
													item.message
												}

												"
											</div>
											<div className="font-semibold">
												-
												{
													item.creator
												}{" "}
												<span className="">
													Amazon
													Reviews
												</span>{" "}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Review;
