import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import authorRuhling from "../assets/authorRuhling.jpg";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import OtherBooks from "./OtherBooks";
import { Outlet, Link } from "react-router-dom";
function Author() {
  return (
    <>
      <div className="w-[80%] mx-auto pt-[128px] font-light mb-16">
        <div className="flex">
          <div className="my-auto">
            <span class="md:text-8xl text-xl my-auto">Dr Richard Ruhling</span>
          </div>
          <div className="ml-auto">
            <img src={authorRuhling} className="max-w-[700px]" alt="" />
          </div>
        </div>
        <div className="w-[40%] my-[40px]">
          <span class="md:text-5xl text-xl  mr-auto ">
            About Dr Richard Ruhling
          </span>
        </div>
        <div className="ml-16 text-xl text-justify">
          Richard Ruhling, MD, MPH was board-certified in Internal Medicine and
          taught Health Science at Loma Linda University. NIH gifted his school
          $40 million for a study to learn why the community lived about seven
          years longer than other non-smokers. The study supports the benefits
          of a vegan or vegetarian diet and many diseases are reversible if we
          eat wisely. Ruhling’s wife died from another MD’s prescription for a
          urinary infection and Ruhling visited US senators with medical
          literature showing that prescription drugs are a leading cause of
          illness and death.
          <br />
          <br />
          <br />
          One senator said, “You are wasting your time—they own us,” speaking of
          drug company donations to their re-election campaigns. Ruhling was
          reared a Seventh-day Adventist, but now sees all denominations as
          stuck in their own history and closed to new truth from the Bible. His
          latest book, From Lockdown to knockdown The Fall of America & New
          World Order. It points to Judgment for US in 2023. It shows how
          judgment fell on Egypt for killing Israelite babies and how the US has
          aborted 60 million and enslaved most people in substance abuse and
          negative lifestyles.
        </div>
      </div>
      <OtherBooks />
    </>
  );
}

export default Author;
