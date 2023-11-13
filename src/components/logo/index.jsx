import React from "react";
import logo from '../../images/flecha_transparente.png';
// import { ReactComponent as LogoSvg } from '../../images/flecha_transparente.png';
import "./index.css";


const Logo = ({ color = "white" }) => <div className="text-white">
  <img className="game-images" src={logo} alt="Armar tu Mi Agenda Interactiva" /> REL↻AD
</div>

export default Logo;