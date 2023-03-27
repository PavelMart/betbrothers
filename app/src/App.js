import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import PartnerInfo from "./components/PartnerInfo";
import Popup from "./components/Popup";
import ChangeLanguage from "./components/UI/ChangeLanguage";
import { getData } from "./store/data/data.slice";

function App() {
  const { loading, isFormOpen, isPartnersOpen, language } = useSelector((state) => state.data);
  const [font, setFont] = useState("FilsonPro");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(language));

    switch (language) {
      case "english":
        setFont("FilsonPro");
        break;
      case "russian":
        setFont("Russian");
        break;
      case "ukraine":
        setFont("Ukraine");
        break;
      case "spain":
        setFont("Spain");
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const closeMenu = (e) => {
    if (!e.target.closest(".header")) document.querySelector(".navbar-collapse").classList.remove("show");
  };

  return (
    <ErrorBoundary>
      <div className="App" onClick={closeMenu} style={{ fontFamily: [font, "Helvetica Neue, Arial, sans-serif"].join(", ") }}>
        {loading === "pending" ? (
          <div className="loading" id="loading" />
        ) : (
          <>
            <Header />
            <Main />
            <Footer />
            <Popup isOpen={isFormOpen}>
              <Form />
            </Popup>
            <Popup style={{ alignItems: "center" }} isOpen={isPartnersOpen} innerStyle={{ borderRadius: 25 }}>
              <PartnerInfo />
            </Popup>
            <ChangeLanguage />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
