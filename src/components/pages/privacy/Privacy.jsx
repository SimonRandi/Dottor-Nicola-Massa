import "../privacy/Privacy.css";
import Navigation2 from "../../navigation/Navigation2.jsx";
import Footer from "../../footer/Footer";

const Privacy = () => {
  return (
    <>
      <Navigation2 />

      <section className="page-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="mb-4 text-center">Privacy Policy</h1>

              <p>
                Ai sensi del Regolamento UE 2016/679 (GDPR), la presente
                informativa descrive le modalità di trattamento dei dati
                personali degli utenti che consultano questo sito web.
              </p>

              <h3 className="mt-4">Titolare del trattamento</h3>
              <p>
                Dott. Nicola Massa <br />
                Email: nicola.massa001@gmail.com
              </p>

              <h3 className="mt-4">Tipologie di dati trattati</h3>
              <p>
                Il sito non raccoglie dati personali in modo automatico né
                tramite moduli di registrazione. Eventuali dati personali
                vengono forniti volontariamente dall’utente tramite contatti
                diretti (email, telefono o altri canali di comunicazione).
              </p>

              <h3 className="mt-4">Dati di navigazione</h3>
              <p>
                I sistemi informatici e le procedure software preposte al
                funzionamento di questo sito acquisiscono, nel corso del loro
                normale esercizio, alcuni dati personali la cui trasmissione è
                implicita nell’uso dei protocolli di comunicazione di Internet.
                Questi dati includono indirizzi IP, tipo di browser, sistema
                operativo, orario della richiesta e altri parametri relativi
                all’ambiente informatico dell’utente. Tali informazioni non sono
                raccolte per essere associate a interessati identificati, ma
                potrebbero, attraverso elaborazioni e associazioni con dati
                detenuti da terzi, permettere di identificare gli utenti.
              </p>

              <h3 className="mt-4">Finalità del trattamento</h3>
              <ul>
                <li>Rispondere alle richieste dell’utente</li>
                <li>Fornire informazioni sui servizi offerti</li>
                <li>Garantire il corretto funzionamento del sito</li>
                <li>Adempiere ad eventuali obblighi di legge</li>
              </ul>

              <h3 className="mt-4">Base giuridica del trattamento</h3>
              <p>
                Il trattamento dei dati si basa sul consenso dell’utente,
                espresso attraverso il contatto volontario con il titolare, e
                sull’interesse legittimo del titolare nel garantire il corretto
                funzionamento del sito web.
              </p>

              <h3 className="mt-4">Modalità di trattamento</h3>
              <p>
                Il trattamento dei dati personali avviene mediante strumenti
                informatici e telematici, con logiche strettamente correlate
                alle finalità indicate e adottando misure di sicurezza adeguate
                per prevenire accessi non autorizzati, divulgazione, modifica o
                distruzione non autorizzata dei dati.
              </p>

              <h3 className="mt-4">Conservazione dei dati</h3>
              <p>
                I dati personali saranno conservati per il tempo strettamente
                necessario a conseguire le finalità per cui sono stati raccolti
                e nel rispetto degli obblighi di legge applicabili.
              </p>

              <h3 className="mt-4">Comunicazione dei dati a terzi</h3>
              <p>
                I dati personali non saranno diffusi. Potranno essere comunicati
                a soggetti terzi solo qualora ciò sia necessario per adempiere a
                obblighi di legge o su richiesta delle autorità competenti.
              </p>

              <h3 className="mt-4">Cookie</h3>
              <p>
                Questo sito utilizza esclusivamente cookie tecnici necessari al
                corretto funzionamento delle pagine web e per migliorare
                l’esperienza di navigazione dell’utente. Non vengono utilizzati
                cookie di profilazione o di marketing.
              </p>

              <h3 className="mt-4">Diritti dell’utente</h3>
              <p>
                Gli utenti hanno il diritto di ottenere dal titolare del
                trattamento, nei casi previsti, l’accesso ai dati personali, la
                rettifica o la cancellazione degli stessi, la limitazione del
                trattamento o di opporsi al trattamento (artt. 15–22 del GDPR).
                Le richieste possono essere inviate via email al titolare del
                trattamento.
              </p>

              <h3 className="mt-4">Modifiche alla presente informativa</h3>
              <p>
                Il titolare del trattamento si riserva il diritto di apportare
                modifiche alla presente informativa in qualunque momento,
                dandone pubblicità agli utenti su questa pagina.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
