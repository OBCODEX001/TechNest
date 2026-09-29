import logo from "../assets/logo.jpeg";
import "./Header.css";
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { useCart } from "../context/useCart"
const Header = () => {
  const { cartCount } = useCart()
  return (
    <>
      <nav className="NavBar">
        <div className="NavBarInnerContainer">
          <div className="firstNavContainer">
            <div className="logoContainer">
              <img src={logo} alt="" />
            </div>
            <h1>TechNest</h1>
          </div>
          <div className="secondNavContainer">
            <button>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : " ")}
              >
                Home
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/Shop"
                className={({ isActive }) => (isActive ? "active" : " ")}
              >
                Shop
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/Best-Sellers"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Best Sellers
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/Contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/Cart"
                className={({ isActive }) => (isActive ? "active" : " ")}
              >
                Cart ({cartCount})
              </NavLink>
            </button>
          </div>
          <div className="thirdNavContainer">
            <NavLink to="/login" className="loginButton">Login</NavLink>
            <NavLink to="/sign-up" className="registerButton">Sign Up</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
