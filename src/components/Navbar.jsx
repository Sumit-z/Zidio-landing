import './Navbar.css'
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true)
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll' , changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} style={{width : "160px"}} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li className="nav-item">
          <Link className="list-items" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="list-items" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="list-items" to="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="list-items" to="#">Contact Us</Link>
        </li>
        <li className="nav-item nav-search">
          <div className="nav-search-container">
            <div className="nav-search">
            <Link className="list-items" to="#">
              <CiSearch style={{marginTop :"8px"}} size={25}></CiSearch>
            </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
