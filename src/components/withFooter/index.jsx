import Separator from '../separator';
import "./index.css";
import Logo from "../logo";

const WithFooter = ({ children, content, color }) => <div className="with-footer-container">
  <Logo />
  <div className="with-footer-content" >
    {children}
  </div>
</div>

export default WithFooter;