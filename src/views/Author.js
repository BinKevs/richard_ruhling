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
          After Internal Medicine training and board certification, Ruhling had
          a Cardiology Fellowship before teaching at Loma Linda's School of
          Public Health. Attending a cardiology convention, he heard Pritikin
          reporting how a low fat, low cholesterol diet reversed heart disease
          and got 85% of patients off their drugs for diabetes and blood
          pressure. Ruhling developed a Total Health Seminar to help people with
          positive lifestyle changes to avoid high-risk pharma alternatives and
          at 80 is in excellent health. He can be contacted for speaking for
          corporate medical cost containment or by churches wanting to consider
          an alternate to the rapture theory.
          <br />
          <br />
          <br />
          Dr. Richard Ruhling is a retired physician who was Assistant Professor
          of Health Science at Loma Linda University, 1974-78. He was
          board-certified in internal medicine and authored Why You Shouldn’t
          Ask Your Doctor, Wake Up America and Apocalypse 2013. He predicted war
          with Iraq six years before 9-11 and he’s predicting civil war in
          America – DHS is preparing for it. Dr. Ruhling is President of Total
          Health, Inc, a non-profit organization that promotes a positive
          lifestyle as true healthcare in contrast to prescription drugs that
          have become the #1 cause of illness, disability and death. He’s
          available for speaking and seminars on health and topics related to
          this book.
        </div>
      </div>
      <OtherBooks />
    </>
  );
}

export default Author;
