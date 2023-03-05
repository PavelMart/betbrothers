import React from "react";
import { useSelector } from "react-redux";
import RegisterBtn from "./UI/RegisterBtn";
import ShowMoreBtn from "./UI/ShowMoreBtn";

const Main = () => {
  const { features, aboutUs, partners, getStarted } = useSelector((state) => state.data.data.sections);
  return (
    <>
      <section id="features" className="features-list-section wide-section">
        <div className="container">
          <h3 className="section-title text-center ">{features.title}</h3>
          <div className="features-list">
            <div className="features-list-col">
              <div href="/features/tournament-management" className="features-list-item">
                <div className="icon-wrap">
                  <img src="./assets/images/advantages/operation-1.png" alt="Fast – Easy – Secure Payments" />
                </div>
                <h5 className="feature-title">{features.featuresList.first.title}</h5>
                <p>{features.featuresList.first.text}</p>
              </div>
            </div>
            <div className="features-list-col">
              <div href="/features/rankings-and-sanctioning" className="features-list-item">
                <div className="icon-wrap">
                  <img src="./assets/images/advantages/best-price.png" alt="Best Odds and Highest Liquidity" />
                </div>
                <h5 className="feature-title">{features.featuresList.second.title}</h5>
                <p>{features.featuresList.second.text}</p>
              </div>
            </div>
            <div className="features-list-col">
              <div className="features-list-item">
                <div className="icon-wrap">
                  <img src="./assets/images/advantages/setup-account.png" alt="Easy Account Setup" />
                </div>
                <h5 className="feature-title">{features.featuresList.third.title}</h5>
                <p>{features.featuresList.third.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-12">
              <h3 className="section-title text-center">{aboutUs.title}</h3>
              <h3 className="subtitle">{aboutUs.titleText}</h3>
              <div className="row py-3 justify-content-between">
                <div className="offset-lg-1 col-lg-5 col-md-6 col-12 text-center image-col second-order">
                  <div style={{ overflow: "hidden", borderRadius: 30, padding: 0 }}>
                    <img
                      src="/assets/images/photo.jpg"
                      className="img-fluid"
                      alt="sportyhq logo"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div>
                    <p>{aboutUs.firstParagraph}</p>
                    <p>{aboutUs.secondParagraph}</p>
                    <p>{aboutUs.thirdParagraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners" className="perfect-solution-section partners-section">
        <div className="perfect-solution-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9 col-12 text-center">
                <h3 className="section-title">{partners.title}</h3>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="partners-list">
              <div className="partners-list-col">
                <span>
                  <img src="/assets/images/partners/laystars.png" alt="laystars" className="img-fluid" />
                </span>
              </div>
              <div className="partners-list-col">
                <span>
                  <img src="/assets/images/partners/ps3838.png" alt="ps3838" className="img-fluid" />
                </span>
              </div>
              <div className="partners-list-col">
                <span>
                  <img src="/assets/images/partners/sportsbetio.png" alt="sportsbet" className="img-fluid" />
                </span>
              </div>
            </div>
            <ShowMoreBtn />
          </div>
        </div>
      </section>
      <section id="get-started" className="get-started-section wide-section">
        <div className="container">
          <div className="content-wrap">
            <div className="content-col">
              <div className="title-wrap">
                <h4 className="title">{getStarted.title}</h4>
                <h5 className="subtitle">{getStarted.text}</h5>
              </div>
              <div className="buttons-wrap">
                <RegisterBtn />
              </div>
            </div>
            <div className="image-col">
              <div className="image-wrap">
                <img src="/assets/images/illustration/get-started-image.png" alt="sporty tournament icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
