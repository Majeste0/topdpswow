import React, { useState } from "react";
import df_wp from "../../images/test_wp.jpg";
import heal_wp from "../../images/heal_wp.webp";
import triangle from "../../images/traingle.png";
import Popup from "./popup";
import testt from "../../images/test_wp.jpg";
import druide from "../../images/passteque.jpg";
import chaman from "../../images/chaman.jpg";
import pretre from "../../images/pretre.webp";
import moine from "../../images/Moine.webp";
import paladin from "../../images/paladin.webp";
import evocateur from "../../images/paladin.webp";

const Main = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const [clickPopup, setClickPopup] = useState(false);

  return (
    <>
      {console.log(clickPopup)}
      {clickPopup ? (
        <div>
          <div className=" z-[1000] w-full h-[90%] fixed flex justify-evenly items-center shadow-[0px_0px_2px_black]">
            <div
              onClick={() => setClickPopup(false)}
              className="h-[100vh] absolute w-[100vh] scale-[5.0] backdrop-blur-[2px] bg-[182px_182px_182px_0.1]"
            ></div>

            <div className=" h-[15vw] w-[15vw] rounded-[50%] relative flex justify-center items-end border-l-2 border-r border-t-2 border-b border-solid border-black grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-chaman hover:border-opacity-80 hover:shadow-[0px_0px_20px] hover:shadow-chaman ">
              <img
                src={chaman}
                className="absolute opacity-[85%] w-full h-full object-cover rounded-[50%]"
              ></img>
              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                CHAMAN
              </h4>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-[50%] relative flex justify-center items-end border-l border-r border-t-2 border-b border-solid border-black grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-druide hover:border-opacity-80 hover:shadow-[0px_0px_20px] hover:shadow-druide">
              <img
                src={druide}
                className="absolute   opacity-[85%] w-full h-full object-cover rounded-[50%]"
              ></img>

              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                DRUIDE
              </h4>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-[50%] relative flex justify-center items-end border-l border-r-2 border-t-2 border-b border-solid border-black  grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-prêtre hover:border-opacity-80 hover:shadow-[0px_0px_20px] hover:shadow-prêtre">
              <img
                src={pretre}
                className="absolute  opacity-[85%] w-full h-full object-cover rounded-[50%]"
              ></img>

              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                PRÊTRE
              </h4>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-[50%] relative flex justify-center items-end border-l-2 border-r border-t border-b-2 border-solid border-black grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-moine hover:border-opacity-80 hover:shadow-[0px_0px_20px] hover:shadow-moine">
              <img
                src={moine}
                className="absolute  opacity-[85%] w-full h-full object-cover rounded-[50%]"
              ></img>

              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                MOINE
              </h4>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-[50%] relative flex justify-center items-end border-l border-r border-t border-b-2 border-solid border-black grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-paladin hover:border-opacity-80 hover:shadow-[0px_0px_20px_] hover:shadow-paladin">
              <img
                src={paladin}
                className="absolute opacity-[85%]  w-full h-full object-cover rounded-[50%]"
              ></img>

              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                PALADIN
              </h4>
            </div>
            <div className=" h-[15vw] w-[15vw] rounded-[50%]  relative flex justify-center items-end border-inset border-l border-r-2 border-t border-b-2 border-black grayscale hover:opacity-[100%] hover:grayscale-[0%] hover:scale-[1.1] hover:z-[1] hover:border-2 hover:border-evocateur hover:border-opacity-80 hover:shadow-[0px_0px_20px] hover:shadow-evocateur">
              <img
                src={testt}
                className="absolute opacity-[85%] w-full h-full object-cover rounded-[50%]"
              ></img>

              <h4 className="z-[1] mb-[5%] font-goldman text-white text-xl drop-shadow-[0_0_2px_#000]">
                EVOCATEUR
              </h4>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex h-full justify-around overflow-hidden">
        <div className="relative w-full cursor-pointer overflow-hidden">
          <div
            className={isShown === true ? "h-full " : "h-full "}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setClickPopup(true)}
          >
            <img
              src={df_wp}
              alt="healwp"
              className={
                isShown === true
                  ? "w-full h-full object-cover cursor-pointer  transition ease-in-out scale-105 duration-300"
                  : "w-full h-full object-cover cursor-pointer opacity-50 "
              }
            />
            <div
              className={
                isShown === true
                  ? " h-[20%] w-full fit-content absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center bg-opacity-80 transition linear bg-doré duration-[00ms]"
                  : " h-[20%] w-full fit-content absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
              }
            >
              <img
                src={triangle}
                alt="triangle"
                className={
                  isShown === true
                    ? " h-[15%] w-fit mr-[50%] ml-[50%] animate-bounce"
                    : " h-[15%] w-fit mr-[50%] ml-[50%] invert"
                }
              />

              <h3
                className={
                  isShown === true
                    ? "cursor-pointer text-black w-full top-[40%] text-center font-goldman text-2xl "
                    : "cursor-pointer text-white w-full top-[40%] text-center font-goldman text-2xl "
                }
              >
                GUIDES DE CLASSE
              </h3>
              <p
                className={
                  isShown === true
                    ? "cursor-pointer text-black leading-4 w-[50%]  ml-[25%] font-poppins text-base text-center "
                    : "cursor-pointer text-white leading-4 w-[50%]  ml-[25%] font-poppins text-base text-center "
                }
              >
                Apprend à maîtriser ton personnage sur le bout des doigts
              </p>
            </div>
          </div>
        </div>
        <div className="w-[4px] h-full bg-doré fixed z-1 opacity-80"></div>;
        <div
          className="w-full relative cursor-pointer overflow-hidden "
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          <div className="w-full h-full  ">
            <img
              src={heal_wp}
              alt="healwp"
              className={
                isShown2 === true
                  ? "w-full h-full object-cover cursor-pointer transition ease-in-out scale-105 duration-300"
                  : "w-full h-full object-cover cursor-pointer opacity-50"
              }
            />
            <div
              className={
                isShown2 === true
                  ? " h-[20%] w-full fit-content absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center bg-opacity-80 transition linear bg-doré duration-[00ms]"
                  : " h-[20%] w-full fit-content absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
              }
            >
              <img
                src={triangle}
                alt="triangle"
                className={
                  isShown2 === true
                    ? " h-[15%] w-fit mr-[50%] ml-[50%] animate-bounce"
                    : " h-[15%] w-fit mr-[50%] ml-[50%] invert"
                }
              />
              <h3
                className={
                  isShown2 === true
                    ? "cursor-pointer text-black w-full top-[40%] text-center font-goldman text-2xl "
                    : "cursor-pointer text-white w-full top-[40%] text-center font-goldman text-2xl "
                }
              >
                OPTIMISATIONS
              </h3>
              <p
                className={
                  isShown2 === true
                    ? "cursor-pointer text-black leading-4 w-[50%]  ml-[25%] font-poppins text-base text-center"
                    : "cursor-pointer text-white leading-4 w-[50%]  ml-[25%] font-poppins text-base text-center"
                }
              >
                Découvre des astuces pour t'optimiser avant de partir en
                instances
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

/* 
<ReactComponent
    onMouseEnter={() => this.someHandler}
    onMouseLeave={() => this.someOtherHandler}
/>

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </div>
  );
}

export default App;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  render() {
    const { hovered } = this.state;
    const style = hovered ? { backgroundColor: "#333", color: "#fff" } : {};
    return (
      <div>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          Hover over me!
        </div>
        <hr />
        <div style={style}>Was it hovered?</div>
        <hr />
        {hovered && <div>Yes!!</div>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

*/
