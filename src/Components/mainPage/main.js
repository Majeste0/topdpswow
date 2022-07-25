import React from "react";
import df_wp from "../../images/dragonflight_wp.jpg";
import heal_wp from "../../images/heal_wp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <div className="flex h-full justify-around">
        <div className="relative w-full">
          <img
            src={df_wp}
            alt="dfwp"
            className="w-full h-full object-cover opacity-50"
          />

          <h3 className="text-white absolute text-center w-full top-[40%] font-goldman text-2xl">
            GUIDES DE CLASSE
          </h3>
          <p className="text-white absolute w-[50%] left-[25%] top-[45%] text-center font-poppins text-base">
            Apprend à maîtriser ton personnage sur le bout des doigts
          </p>
        </div>
        <div className="w-[2px] h-full bg-doré fixed"></div>;
        <div className="w-full relative">
          <img
            src={heal_wp}
            alt="healwp"
            className="w-full h-full object-cover opacity-50"
          />
          <h3 className="text-white absolute text-center w-full top-[40%] font-goldman text-2xl">
            OPTIMISATIONS
          </h3>
          <p className="text-white absolute w-[50%] left-[25%] top-[45%] text-center font-poppins text-base">
            Découvre des astuces pour t'optimiser avant de partir en instances
          </p>
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
