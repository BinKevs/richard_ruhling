import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import kindleMegaQuake from "../assets/kindleMegaQuake.png";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import OtherBooks from "./OtherBooks";
import { Outlet, Link } from "react-router-dom";
function Book() {
  return (
    <>
      <div className="w-[80%] mx-auto pt-[128px] font-light mb-16">
        <div className="flex justify-center ">
          <div className="text-7xl font-light text-center">
            MegaQuake 2023
            <div className="text-2xl font-semibold my-4">
              How 3 Timelines and 7 Events Signal Apocalyptic Times
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-24 pt-8">
          <img src={bookMegaQuake} className="max-w-[300px]" alt="" />
          {/* <img
            src={kindleMegaQuake}
            className="border-2 max-w-[500px]"
            alt=""
          /> */}
          <div className="text-md text-justify w-[35%] my-auto ml-8">
            Flirting with End-Times--How We Get There, Seismologists see
            earthquakes getting larger, more frequent on the Pacific ‘Ring of
            Fire.’ They know it’s just a matter of time, but saying “It could be
            tomorrow” means they don’t know when. We need better information—how
            about the Bible? Two thousand years ago, men ran to save their
            lives, but were willing to die for Christ after He rose from the
            grave.
            <div className=" md:text-lg font-semibold text-md mt-4">
              Now Available
            </div>
            <a
              href="https://www.amazon.com/MegaQuake-2023-Timelines-Events-Apocalyptic-ebook/dp/B09W1XVVMV/ref=cm_cr_arp_d_product_top?ie=UTF8"
              target="_blank"
              rel="noreferrer"
            >
              <div class="border-2 border-blacke rounded-lg text-md px-5 md:py-2.5 py-3.5 max-w-[250px] my-4">
                <img
                  className="pt-2 "
                  src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-16 mt-8">
          <div className="text-justify w-[40%]">
            They wouldn’t die for a lie—they must have seen Him! The Bible has
            information relevant to our time as seen here- Daniel’s accuracy in
            kingdoms for 2500 years brings us to his vision “at the time of the
            end”--how Muslims trigger Dan 8:17 It’s a conflict between a Muslim
            ram that’s pushing from the Middle East and a goat flies from the
            west to break the ram’s horns, kings of Media and Persia (verse 20).
            The Medes and Persians are now Iraq and Iran—“the vision at the time
            of the end” is half fulfilled with Saddam gone. We bet against the
            odds if we shrug it. What makes the goat angry?
            <br />
            <br />
            [Muslim] nations will be gathered against Jerusalem…half the city
            will go into captivity” (Zechariah 14:1–2). President Erdogan of
            Turkey appealed for 57 Muslim nations to besiege Israel. It’s just a
            matter of time. Muslims will rejoice in their mosque. It has an
            inscription—“Allah has no Son.”
            <br /> <br />
            Suddenly a huge earthquake will cause them to flee. “The Lord shall
            roar from Jerusalem…The heavens and earth shall shake.” Joel 3:16.
            It’s “the day of the Lord” when God “will shake the earth terribly,”
            Isaiah 2:12,21; 1Thess 5:2,3.
            <br />
            <br />
            1. “For the day of the Lord” (extension of ‘night of the Lord,’
            1Thess 5:2) when God executed judgment, Exodus 12:12;42.
            <br />
            2. “comes as a thief” 1Thess 5:2. God was invisible—nobody saw God
            and nobody will see Christ when He comes as thief, Rev 3:3
            <br />
            3. “in the night” Passover night when Israel was to watch, Ex 12:10
            <br />
            4. “for whenthey shall say ‘Peace & safety’ (Iran Nuclear Treaty)
            <br />
            5. “sudden destruction comes on them.” (Megaquake).
          </div>
          <div className="text-justify w-[40%] bg-black text-white p-12 my-auto">
            We should wonder how we get from where we are to the biblical
            end-times that include an earthquake when God will shake the earth
            terribly." Isaiah 2:12,21 “The vision at the time of the end” is a
            ram/goat conflict in Daniel 8:17,20. The ram’s horns are Medes and
            Persians, but now it’s Iraq and Iran—it’s half fulfilled with Saddam
            gone. What makes the goat angry to fight Iran? It’s because Muslims
            take Jerusalem, Zech 14:1,2. Their mosque has an inscription, "Allah
            has no Son" Quran 23: Suddenly "the Lord shall roar from
            Jerusalem...the heavens & earth shall shake." Joel 3:16 Muslims will
            flee. That earthquake initiates the end-times in Revelation. God
            punished Egypt for enslaving Israel; US has most people in bondage
            to alcohol, tobacco, negative lifestyles. 63 million abortions
            deserve judgment worse than Egypt. The Greek word, aggelos, means
            preachers who are blind in thinking the wedding parables mean a
            rapture. God took Israel to a covenant to be His kingdom & Bride in
            Exodus 19:5,6; Jeremiah 3:14, but they had to be ready. When “one is
            taken, the other left." It's about martial law, FEMA camps, UN
            forces ending US. See Luke 17:36,37. We will need a covenant for
            God’s protection; here’s how to be ready for 2023 as a confirmatory
            sign is unfolding.
          </div>
        </div>
      </div>
      <OtherBooks />
    </>
  );
}

export default Book;
