import React from "react";
import twitter from "../../images/header/Twitter.svg";
import youtube from "../../images/header/Youtube.svg";
import twitch from "../../images/header/Twitch.svg";

/* <div className="flex  w-[2%] float-right flex-row-reverse">
          <img src={twitch} alt="twitch" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
        </div>
        */

const Header = () => {
  return (
    <>
      <div className="w-full cursor-default ">
        <h1 className="  font-chakra text-4xl text-center tracking-[-0.1em] text-blanc pt-[10px] font-bold">
          TOP HPS
        </h1>
        <h2 className="text-center font-poppins text-blanc text-md pb-[5px] ">
          {" "}
          Je peux avoir l'innerv stp ?
        </h2>
      </div>
      <div className="h-[4px] w-full bg-doré absolute z-10 "></div>
    </>
  );
};

export default Header;
