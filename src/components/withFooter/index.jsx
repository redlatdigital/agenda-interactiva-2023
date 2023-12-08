import "./index.css";
import Logo from "../logo";
import LogoDer from '../../images/logo_der.png';

const WithFooter = ({ children, content, color }) => <div className="with-footer-container">
  <Logo />
  <div className="with-footer-content" >
    {children}
  </div>
  <div className="footer">
  <p className="game-owner mt-5 text-white fw-bolder">
    Desarrollado sobre <a href="https://democraciaos.org/" target="_blank" className="text-white">DemocracyOS</a>
    <a href="https://democraciaenred.org/" target="_blank">
      <img src={LogoDer} alt="Logo Democracia en Red" height={30} />
    </a>
  </p>
  </div>
</div>

export default WithFooter;