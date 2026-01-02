import "../cookie/Cookie.css";

const CookiePolicy = () => {
  return (
    <div className="container py-5">
      <h1>Cookie Policy</h1>

      <p>
        Questo sito utilizza cookie per migliorare l’esperienza di navigazione
        dell’utente, nel rispetto della normativa vigente.
      </p>

      <h2>Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al
        dispositivo dell’utente.
      </p>

      <h2>Tipologie di cookie utilizzate</h2>
      <ul>
        <li>
          <strong>Cookie tecnici:</strong> necessari al corretto funzionamento
          del sito.
        </li>
        <li>
          <strong>Cookie di terze parti:</strong> solo se l’utente fornisce
          consenso (es. servizi esterni).
        </li>
      </ul>

      <h2>Gestione dei cookie</h2>
      <p>
        L’utente può gestire o revocare il consenso in qualsiasi momento tramite
        il banner cookie o le impostazioni del browser.
      </p>

      <h2>Modifiche</h2>
      <p>
        La presente Cookie Policy può essere aggiornata. Le modifiche saranno
        pubblicate su questa pagina.
      </p>
    </div>
  );
};

export default CookiePolicy;
