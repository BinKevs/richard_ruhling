import flockBirds from "../assets/flockBirds.png";
import bookMegaQuake from "../assets/bookMegaQuake.png";
import authorRuhling from "../assets/authorRuhling.jpg";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";

import { Outlet, Link } from "react-router-dom";
function OtherBooks() {
  return (
    <>
      <div className="bg-black py-[40px]">
        <div className="w-[80%] mx-auto font-light text-white">
          <div className="text-5xl">Other books by Dr Richard Ruhling</div>
          <div className="flex justify-between my-8 text-center">
            <div className="max-w-[150px]">
              <div>
                {" "}
                <img
                  src="https://img.thriftbooks.com/api/images/s/be3e5bff774d22c4944340afb40f5a879f91bff9.jpg"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>
                The Destruction of Jerusalem: A Sign for Us of Good News Amid
                Impending Calamity
              </div>
            </div>
            <div className="max-w-[150px]">
              <div>
                {" "}
                <img
                  src="https://img.thriftbooks.com/api/images/s/8eed25cb1bc75765b55db8b9ca1de7b4f2ea385d.jpg"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>
                9-11: How 9-11 Links in Christ's Last Parables Show How
                End-Times Begin This Spring
              </div>
            </div>{" "}
            <div className="max-w-[150px]">
              <div>
                {" "}
                <img
                  src="https://img.thriftbooks.com/api/images/i/s/E2E55270F29E812E51BA1F030129F9D02351EC5D.jpg"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>
                The Earthquake & The 7 Seals: The Apocalypse Begins: Truths for
                Survival
              </div>
            </div>{" "}
            <div className="max-w-[150px]">
              <div>
                {" "}
                <img
                  src="https://img.thriftbooks.com/api/images/s/47b0186009ecf9ce01a82ab4f1e7a4e1a2cdc245.jpg"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>The Bridegroom Comes!</div>
            </div>{" "}
            <div className="max-w-[150px]">
              <div>
                {" "}
                <img
                  src="https://img.thriftbooks.com/api/images/s/e46bb79f4e314212e50c888bca46f66934e638f8.jpg"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>
                Why You Shouldn't Ask Your Doctor!: Choices That Can Save Your
                Life
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherBooks;
