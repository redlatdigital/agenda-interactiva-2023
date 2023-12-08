import React from "react";
import logo from '../../images/flecha_transparente.png';
// import { ReactComponent as LogoSvg } from '../../images/flecha_transparente.png';
import "./index.css";


const Logo = ({ color = "white" }) => <div className="text-white fw-bolder mt-2"><a href="https://sites.google.com/view/antropologiadigital/encuentro-2023" className="text-logo text-white fw-bolder" target="_blank">
  <img className="game-images" src={logo} alt="Logotipo de la Red Latinoamericana de Antropología digital" /> REL↻AD
</a>
</div>

export default Logo;