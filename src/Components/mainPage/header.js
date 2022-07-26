import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full cursor-default ">
        <h1 className=" font-chakra text-4xl text-center tracking-[-0.1em] text-blanc pt-[10px] font-bold transition ease-in-out delay-150 hover:scale-110 duration-300">
          TOP HPS
        </h1>
        <h2 className="text-center font-poppins text-blanc text-md pb-[5px] ">
          {" "}
          Je peux avoir l'innerv stp ?
        </h2>
      </div>
      <div className="h-[2px] w-full bg-doré absolute z-10"></div>
    </>
  );
};

export default Header;
