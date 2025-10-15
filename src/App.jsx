import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Homepage from "./components/pages/Homepage";
import Trattamenti from "./components/pages/trattamenti/Trattamenti.jsx";
import ChiSono from "./components/pages/chi-sono/ChiSono.jsx";
import Corsi from "./components/pages/corsi/Corsi.jsx";
import Domicilio from "./components/pages/domicilio/Domicilio.jsx";
import NotFoundPage from "./components/pages/not-found-page/NotFoundPage.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="/trattamenti" element={<Trattamenti />}></Route>
          <Route path="/chi-sono" element={<ChiSono />}></Route>
          <Route path="/corsi" element={<Corsi />}></Route>
          <Route path="/domicilio" element={<Domicilio />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
