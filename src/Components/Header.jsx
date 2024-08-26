import headerStyle from "../styles/header.module.css";
import cartImg from "../images/Cart.png";
import { useContext } from "react";
import AppContext from "../services/AppContext";
import { Link } from "react-router-dom";
// import userImg from "../images/User.png"

const Header = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <div className={headerStyle.headerContainer}>
      <div className={headerStyle.logo}>FreshKart</div>
      <div className={headerStyle.nav}>
        <div className={headerStyle.navItem}>
          <Link to="/items/fruits">Fruits</Link>
        </div>
        <div className={headerStyle.navItem}>
          <Link to="/items/vegetables">Vegetables</Link>
        </div>
      </div>
      <div className={headerStyle.cart}>
        <img src={cartImg} alt="" />
        {state.cart.length > 0 ? (
          <div className={headerStyle.count}>{state.cart.length}</div>
        ) : null}
        <span>Cart</span>
      </div>

      <div className={headerStyle.login}>Login</div>
    </div>
  );
};
export default Header;
