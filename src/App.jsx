import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CookieConsentProvider,
  CookieBanner,
} from "@vantezzen/react-cookie-banner";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Homepage from "./components/pages/Homepage";
import Trattamenti from "./components/pages/trattamenti/Trattamenti.jsx";
import ChiSono from "./components/pages/chi-sono/ChiSono.jsx";
import Corsi from "./components/pages/corsi/Corsi.jsx";
import Domicilio from "./components/pages/domicilio/Domicilio.jsx";
import NotFoundPage from "./components/pages/not-found-page/NotFoundPage.jsx";
import Privacy from "./components/pages/privacy/Privacy.jsx";
import CookiePolicy from "./components/pages/cookie/CookiePolicy.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <CookieConsentProvider>
        <CookieBanner
          privacyPolicyUrl="/privacy"
          cookiePolicyUrl="/cookie-policy"
          groups={[
            {
              id: "essential",
              name: "Cookie necessari",
              description: "Necessari per il corretto funzionamento del sito.",
              required: true,
            },
            {
              id: "analytics",
              name: "Cookie analitici",
              description:
                "Permettono di raccogliere informazioni anonime su come viene utilizzato il sito.",
            },
            {
              id: "marketing",
              name: "Cookie marketing",
              description:
                "Utilizzati per servizi esterni o contenuti incorporati.",
            },
          ]}
        />

        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/trattamenti" element={<Trattamenti />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/corsi" element={<Corsi />} />
          <Route path="/domicilio" element={<Domicilio />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CookieConsentProvider>
    </BrowserRouter>
  );
};

export default App;
