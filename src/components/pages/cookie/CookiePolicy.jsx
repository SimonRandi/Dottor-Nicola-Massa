import "../cookie/Cookie.css";
import Navigation2 from "../../navigation/Navigation2.jsx";
import Footer from "../../footer/Footer.jsx";

const CookiePolicy = () => {
  return (
    <>
      <Navigation2 />

      <section className="page-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="mb-4 text-center">Cookie Policy</h1>

              <p>
                La presente Cookie Policy descrive l'utilizzo dei cookie da
                parte di questo sito web, in conformità con la normativa europea
                in materia di protezione dei dati personali.
              </p>

              <h3 className="mt-4">Titolare del trattamento</h3>
              <p>
                Dott. Nicola Massa <br />
                Email: nicola.massa001@gmail.com
              </p>

              <h3 className="mt-4">Cosa sono i cookie</h3>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati
                inviano al dispositivo dell’utente (computer, tablet o
                smartphone), dove vengono memorizzati per essere poi ritrasmessi
                agli stessi siti alla visita successiva.
              </p>

              <h3 className="mt-4">Tipologie di cookie utilizzate</h3>

              <p>
                Questo sito utilizza esclusivamente le seguenti tipologie di
                cookie:
              </p>

              <ul>
                <li>
                  <strong>Cookie tecnici:</strong> sono necessari per il
                  corretto funzionamento del sito e per permettere la normale
                  navigazione delle pagine.
                </li>
                <li>
                  <strong>Cookie di terze parti:</strong> potrebbero essere
                  presenti servizi esterni integrati nelle pagine del sito (ad
                  esempio mappe o contenuti multimediali). In tali casi i cookie
                  vengono gestiti direttamente dai servizi terzi.
                </li>
              </ul>

              <h3 className="mt-4">Durata dei cookie</h3>
              <p>
                I cookie utilizzati da questo sito hanno durata limitata alla
                sessione di navigazione oppure possono essere memorizzati
                temporaneamente nel dispositivo dell’utente per migliorare
                l’esperienza di utilizzo del sito.
              </p>

              <h3 className="mt-4">Gestione dei cookie</h3>
              <p>
                L’utente può decidere se accettare o rifiutare i cookie
                modificando le impostazioni del proprio browser. La
                disabilitazione dei cookie potrebbe influire sul corretto
                funzionamento di alcune parti del sito.
              </p>

              <p>
                È possibile gestire i cookie tramite le impostazioni dei
                principali browser:
              </p>

              <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
                <li>Safari</li>
              </ul>

              <h3 className="mt-4">Modifiche alla presente Cookie Policy</h3>
              <p>
                Il titolare si riserva il diritto di apportare modifiche alla
                presente Cookie Policy in qualsiasi momento. Le modifiche
                saranno pubblicate su questa pagina.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CookiePolicy;
