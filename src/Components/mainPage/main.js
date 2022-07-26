import React, { useState } from "react";
import df_wp from "../../images/dragonflight_wp.jpg";
import heal_wp from "../../images/heal_wp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  return (
    <>
      <div className="flex h-full justify-around overflow-hidden">
        <div className="relative w-full cursor-pointer overflow-hidden">
          <div
            className="h-full"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              src={df_wp}
              alt="healwp"
              className={
                isShown === true
                  ? "w-full h-full object-cover cursor-pointer transition ease-in-out scale-110 duration-300"
                  : "w-full h-full object-cover cursor-pointer opacity-50"
              }
            />
            <div>
              <h3 className="cursor-pointer text-white absolute text-center w-full top-[40%] font-goldman text-2xl ">
                GUIDES DE CLASSE
              </h3>
              <p className="cursor-pointer text-white absolute w-[50%] left-[25%] top-[45%] text-center font-poppins text-base">
                Apprend à maîtriser ton personnage sur le bout des doigts
              </p>
            </div>
          </div>
        </div>
        <div className="w-[2px] h-full bg-doré fixed z-1"></div>;
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
                  ? "w-full h-full object-cover cursor-pointer transition ease-in-out scale-110 duration-300"
                  : "w-full h-full object-cover cursor-pointer opacity-50"
              }
            />
            <div>
              <h3 className="cursor-pointer text-white absolute text-center w-full top-[40%] font-goldman text-2xl">
                OPTIMISATIONS
              </h3>
              <p className="cursor-pointer text-white absolute w-[50%] left-[25%] top-[45%] text-center font-poppins text-base">
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
