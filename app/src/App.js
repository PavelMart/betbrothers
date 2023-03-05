import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import Popup from "./components/Popup";
import ChangeLanguage from "./components/UI/ChangeLanguage";
import { getData } from "./store/data/data.slice";

function App() {
  const [language, setLanguage] = useState("english");
  const { loading, data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(language));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  console.log(data);

  return (
    <ErrorBoundary>
      <div className="App">
        {loading === "pending" ? (
          <div className="loading" id="loading" />
        ) : (
          <>
            <Header />
            <Main />
            <Footer />
            <Popup>
              <Form />
            </Popup>
            <ChangeLanguage />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
