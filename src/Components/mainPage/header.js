import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full ">
        <h1 className=" font-chakra text-4xl text-center tracking-[-0.1em] text-blanc pt-[10px] font-bold">
          TOP HPS
        </h1>
        <h2 className="text-center font-poppins text-blanc text-md pb-[5px] ">
          {" "}
          Je peux avoir l'innerv stp ?
        </h2>
      </div>
      <div className="h-[2px] w-full bg-doré absolute"></div>
    </>
  );
};

export default Header;
