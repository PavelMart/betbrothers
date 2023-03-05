import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/data/data.slice";
import RegisterBtn from "./UI/RegisterBtn";

const Navbar = () => {
  const {
    isMenuOpen,
    data: {
      menu: { home, features, aboutUs, partners },
    },
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div className={["collapse", "navbar-collapse", isMenuOpen ? "show" : ""].join(" ")} id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/" id="navbarFeaturesMenu" role="button">
            {home}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features" onClick={() => dispatch(toggleMenu())}>
            {features}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us" onClick={() => dispatch(toggleMenu())}>
            {aboutUs}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#partners" onClick={() => dispatch(toggleMenu())}>
            {partners}
          </a>
        </li>
        <li className="nav-item offset-left">
          <RegisterBtn />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
