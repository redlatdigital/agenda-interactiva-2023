import React from "react";
import WithBackground from "../withBackground";
import Logo from "../logo";
import Background from '../../images/roundBackground.jpg';
import "./index.css";

const Landing = ({ follow }) => <div className="animate__animated animate__fadeOut animate__delay-5s" onAnimationEnd={follow}>
  <WithBackground background={Background}>
  <div className="centered animate__animated animate__fadeIn animate__slower">
    <div className="card text-white py-5 px-2 mx-1" style={{backgroundColor: "#000"}}>
      <div className="card-body">
      <Logo />
      <p className="game-name">Agenda Interactiva</p>
      </div>

    </div>
    </div>
</WithBackground>
</div>

export default Landing;