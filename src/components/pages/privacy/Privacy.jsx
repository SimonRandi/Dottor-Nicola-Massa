import "../privacy/Privacy.css";

const Privacy = () => {
  return (
    <section className="page-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4 text-center">Privacy Policy</h1>

            <p className="mb-3">
              Ai sensi del Regolamento UE 2016/679 (GDPR), la presente
              informativa descrive le modalità di trattamento dei dati personali
              degli utenti che consultano questo sito web.
            </p>

            <h3 className="mt-4">Titolare del trattamento</h3>
            <p>
              Dott. Nicola Massa <br />
              Email: nicola.massa001@gmail.com
            </p>

            <h3 className="mt-4">Tipologie di dati trattati</h3>
            <p>
              Il sito non raccoglie dati personali automaticamente. I dati
              vengono forniti volontariamente dall’utente tramite contatti
              diretti (email, telefono, WhatsApp).
            </p>

            <h3 className="mt-4">Finalità del trattamento</h3>
            <ul>
              <li>Rispondere alle richieste dell’utente</li>
              <li>Fornire informazioni sui servizi offerti</li>
              <li>Adempiere ad obblighi di legge</li>
            </ul>

            <h3 className="mt-4">Base giuridica</h3>
            <p>
              Il trattamento dei dati si basa sul consenso dell’utente e
              sull’interesse legittimo del titolare.
            </p>

            <h3 className="mt-4">Diritti dell’utente</h3>
            <p>
              L’utente può esercitare i diritti previsti dagli articoli 15–22
              del GDPR contattando il titolare del trattamento.
            </p>

            <h3 className="mt-4">Modifiche alla presente informativa</h3>
            <p>
              Il titolare si riserva il diritto di apportare modifiche alla
              presente informativa in qualunque momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
