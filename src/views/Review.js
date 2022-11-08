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
      message:
        "This is a nice collection of resources that can help anyone better prepare for what is inevitable. There is no future in abortion, homosexuality, greed, killing, poisonous drugs, or willful disobedience to the Creator.",
      creator: "	Donald Ayers",
    },
    {
      message:
        "This book clearly defines how the year 2023 is calculated for the “mega quake” – bringing in the (biblical) end of times. Using scripture references and methodical calculations brings this author, Richard Ruhling, to his conclusions as well stated in Mega Quake 2023. There will be a lot of nay-sayers that will not understand or accept what Ruhling has compiled within the pages of this book. However, there are more compelling reason to at least read the book. We are told in the bible to be prepared, to stay awake and be watchful. One cannot do that if they don’t know the signs or what they are watching for. Whether or not you believe everything that is written in this book, reading it can only help you understand what is coming – if not when.",
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
          <div className="text-7xl font-light py-6">24-7 Press Release</div>
          <div className="w-[80%] mx-auto">
            <div className="flex space-x-8 ">
              <div className="text-lg flex">
                {" "}
                <IconContext.Provider
                  value={{
                    color: "#000000",
                    size: "2.0em",
                  }}
                >
                  <AiOutlineUser />
                </IconContext.Provider>
                <span className="my-auto ml-2">24-7 Press Release</span>
              </div>
              <div className="text-lg flex">
                {" "}
                <IconContext.Provider
                  value={{
                    color: "#000000",
                    size: "2.0em",
                  }}
                >
                  <AiOutlineCalendar />
                </IconContext.Provider>
                <span className="my-auto ml-2">September 23, 2022</span>
              </div>
            </div>

            <div className="font-light text-justify mt-8 ">
              {" "}
              WILMINGTON, NC, September 23, 2022 /24-7PressRelease/ -- As stated
              in the Wikipedia article on prophecy, " . . . a prophecy is a
              message that has been communicated to a person (typically called a
              prophet) by a supernatural entity. Prophecies are a feature of
              many cultures and belief systems and usually contain divine will
              or law, or preternatural knowledge, for example of future events.
              They can be revealed to the prophet in various ways depending on
              the religion and the story, such as visions, divination, or direct
              interaction with divine beings in physical form. Stories of
              prophetic deeds sometimes receive considerable attention and some
              have been known to survive for centuries through oral tradition or
              as religious texts."
              <br />
              <br />
              While much of the information derived from divination are
              concerned with "what" will occur, what is more interesting to
              modern followers of prophecy are the questions of "where" and
              "when", with an emphasis on "end-times" prophecies.
              <br />
              <br />
              According to the US Geological Survey, "the western United States
              lies along the boundaries of major tectonic plates that make up
              the Earth's crust—the North American Plate and the ocean plates to
              the west. These plates are moving against each other, breaking up
              the crust along many faults like the San Andreas Fault."
              Scientists today observe a crescendo of seismic activity on the
              Pacific Ring of Fire, and though the San Andreas Fault is 80 years
              overdue for a major earthquake, seismologists can't predict when
              that will occur.
              <br />
              <br />
              "By contrast, the world's best-selling book reveals how we get
              there with confirmatory signs that are turning positive," says Dr.
              Richard Ruhling, author of a new book, MegaQuake 2023, that
              predicts biblical end-times to begin next year.
              <br />
              <br />
              Ruhling is an expert on Bible prophecy—he predicted war with Iraq
              before 9-11, based on "the vision at the time of the end" where a
              goat flies from the west to break the horns of a militant Muslim
              ram in the Middle East. The ram's horns are the kings of Media and
              Persia in the book of Daniel. Those areas are now known as Iraq
              and Iran.
              <br />
              <br />
              "We don't want war with Iran, so we should wonder what makes the
              goat angry to fight the ram," says Ruhling. He finds the answer in
              President Erdogan of Turkey's appeal for 57 Muslim nations to
              besiege Israel. This is an echo of a prophecy more than 2500 years
              ago when nations will be gathered against Jerusalem. "The city
              will be captured, the houses ransacked, . ." This is a
              confirmatory sign, expected for Passover.
              <br />
              <br />
              How does this impact the San Andreas fault? Muslims are expected
              to celebrate their mosque that has an inscription, "Allah has no
              son." Suddenly, "the Lord shall roar from Jerusalem...the earth
              shall shake," These passages have "day of the Lord" context when
              God "will shake the earth terribly," says Ruhling, who sees
              Daniel's prophecy of the ram's horns half fulfilled by the death
              of Saddam Hussein, and "time of the end" coming.
              <br />
              <br />
              Ellen White, founder of Loma Linda University, and for whom White
              Memorial Hospital in LA is named, had a vision of an earthquake at
              Loma Linda which is near the San Andreas Fault. She saw "buildings
              great and small falling to the ground...Many lives were blotted
              out...It seemed that Judgment day had come." In Testimonies,
              Volume 9, she cited Zephaniah which also has "day of the Lord"
              context.
              <br />
              <br />
              Ruhling says her reference to "wickedness in the large cities"
              includes Hollywood that has exported negative lifestyles and vices
              to the world. Muslims say the US is the great Satan, and Ruhling
              sees a US parallel to Egypt. Egypt enslaved Israel as the US has
              with these same vices. Just as Egypt threw Israel's babies in the
              river; the US has thrown 63 million babies in the trash via
              modern-day abortion practices. Judgment fell at Passover on Egypt
              as a jubilee event for Israel that meant freedom--it came every 50
              years. 50 years from Roe v Wade is 2023, and Passover is when to
              expect the confirmatory sign of Muslims gathering against
              Jerusalem.
              <br />
              <br />
              MegaQuake 2023, How 3 Timelines and 7 Events Signal Apocalyptic
              Times, ASIN B09W1XVVMV, is available on Amazon at low cost to
              favor leaving a review to encourage other readers to consider the
              warning. Readers can click "Look Inside" to see contents before
              buying at https://www.amazon.com/dp/B09W1XVVMV and Kindle offers a
              free app for pc or phone so one can spare the trees and not pay
              for paper or postage.
            </div>
            <div className="text-lg my-4">
              Source :{" "}
              <a
                className=" cursor-pointer text-blue-600 font-bold"
                target="_Blank"
                href="https://www.24-7pressrelease.com/press-release/494559/new-christian-book-megaquake-by-dr-richard-ruhling-predicts-san-andreas-earthquake-in-2023"
              >
                www.24-7pressrelease.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-7xl font-light py-6">Amazon</div>
          <div className="grid grid-cols-1 gap-6">
            {review.map((item, index) => {
              return (
                <div className="p-6 italic flex w-[80%] mx-auto" key={index}>
                  <div className="flex flex-col justify-center items-center mr-4">
                    {" "}
                    <IconContext.Provider
                      value={{
                        color: "#808080",
                        size: "5.5em",
                      }}
                    >
                      <FaUserCircle />
                    </IconContext.Provider>
                    <div className="flex">
                      {" "}
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <div className="">
                      <div className="">"{item.message}"</div>
                      <div className="font-semibold">
                        -{item.creator} <span className="">Amazon Reviews</span>{" "}
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
