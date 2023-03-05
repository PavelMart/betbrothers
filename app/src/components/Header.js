import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarToggler from "./UI/NavbarToggler";
import RegisterBtn from "./UI/RegisterBtn";

const Header = () => {
  const {
    data: { promoTitle, promoText },
  } = useSelector((state) => state.data);

  return (
    <section className="hero-section home full">
      <div className="header-wrap">
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <Logo type={"mobile"} />
            <Logo type={"desktop"} />
            <NavbarToggler />
            <Navbar />
          </nav>
        </header>
        <div className="wrap">
          <div className="container">
            <div className="inner-wrap">
              {/* <div className="img-column">
                <img src="/assets/images/promo.png" className="image" alt="sportyHQ laptop" />
                <img src="/assets/images/illustration/home-hero-laptop.png" className="image" alt="sportyHQ laptop" />
              </div> */}
              <div className="content-column">
                <h1 className="title">{promoTitle}</h1>
                <h4 className="subtitle">{promoText}</h4>
                <div className="buttons-wrap">
                  <RegisterBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
