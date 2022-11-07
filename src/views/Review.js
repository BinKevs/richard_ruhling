import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
function Review() {
  const [review, setReview] = useState([
    {
      message:
        "Fun, witty and creative! What a clever idea for a book. What an awesome teacher!",
      creator: "Angela V",
    },
    {
      message:
        "Fabulous limerick writing! Anyone can enjoy this lovely written book, giggles galore.",
      creator: "Meredith Jo",
    },
    {
      message:
        "The book Around the World in Five Lines takes you on an adventure. I bought this book for my grandchildren. When we read a limerick we google the location to find out more about the place. They love learning about different spots in the world.",
      creator: "GrannyBeBe",
    },
    {
      message:
        "Limerick writing is very precise, and follows regimented discipline. In just five lines, the author has to write a beginning middle and end to to this particular type of poetry. This book takes the reader on a journey not only around the world by naming new places, stating a predicament. and finally. a playful solution all in just fine lines. If you like to read different kinds of poetry, this is a great book.",
      creator: "Helena Graves",
    },
    {
      message:
        "Mr. Anstead's Around the World in 5 Lines is a treat for all lovers of the written word. He takes you to many unknown places around the world! It is humor mixed with geography a treat for the entire family!",
      creator: "Amazon Customer",
    },
    {
      message:
        "James is a very gifted gentleman who has used limericks to expose his love for language and the world. James has created vivid imagery in five lines. If you love traveling and language, this is a definite purchase.",
      creator: "Celeste Hill Brockett",
    },
    {
      message:
        "Around the World in Five Lines......loved it! Very sophisticated, showing a great deal of worldly experiences! The limericks in this book make you chuckle! Great read! Dawn",
      creator: "Dawn",
    },
    {
      message:
        "Reviewed in the United States on November 24, 2018 These limericks made me want to find out exactly where the cities and towns were located. It was alot of fun to share with family and friends.",
      creator: "Cullen",
    },
    {
      message:
        "A really fun gift I received this year the Adventures and the places you go in this book I love reading them to my kids",
      creator: "january",
    },
    {
      message:
        "Witty and fun. Must read. These five lines will take you to the corners of the world with excitement and comedy.",
      creator: "josh jones",
    },
    {
      message: "Very enjoyable read. Funny and smart!",
      creator: "Roger franxman",
    },
    {
      message: "Eclectic samples of life in five lines.",
      creator: "Timothy Mercer",
    },
  ]);
  return (
    <>
      <div className="w-[80%] mx-auto text-black pt-[88px]">
        <div className="text-7xl font-bold py-6  text-right">Amazon</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {review.map((item, index) => {
            return (
              <div className="p-6 italic flex" key={index}>
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
    </>
  );
}

export default Review;
