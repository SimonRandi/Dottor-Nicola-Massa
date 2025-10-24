import { Card, Container, Row, Col } from "react-bootstrap";
const Funzionale = "/image/corsi/funzionale.webp";
const Personal = "/image/corsi/personal.webp";
const Posturale = "/image/corsi/posturale.webp";
const Dolce = "/image/corsi/dolce.webp";
import Navigation3 from "../../navigation/Navigation3";
import Footer from "../../footer/Footer";
import "../corsi/Corsi.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Corsi() {
  const corsi = [
    {
      titolo: "Allenamento Funzionale",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "L'allenamento funzionale è una pratica in cui vengono proposti esercizi volti a coinvolgere simultaneamente diversi gruppi muscolari. Possono essere svolti esercizi singoli , a circuito, a corpo libero oppure con ausilio di picooli e grandi attrezzi come kettlebell , elastici , manubri e bilancieri. E' la scelta perfetta per chi cerca un attività mirata alla ricomposizione corporea e al rinforzo muscolare",
      img: Funzionale,
    },
    {
      titolo: "Personal Training",
      persone: "1 persona",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "Sessione individuale con un trainer qualificato, interamente focalizzata sui tuoi obbiettivi. Indicato per chi cerca il massimo risultato o necessita di un supporto specifico. Il beneficio principale è un piano personalizzato e un monitoraggio costante che garantiscono il raggungimento mirato dei risultati desiderati.",
      img: Personal,
    },
    {
      titolo: "Ginnastica Posturale",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "La Ginnastica Posturale è un percorso personalizzato essenziale per migliorare l'allineamento del corpo e correggere le abitudini posturali scorrette. Questa disciplina è consigliata a persone di tutte le età , rivelandosi particolarmente utile per chi conduce una vita sedentaria o avverte rigidità diffusa. Il beneficio primariio è la prevenzione dei dolori muscolo-scheletrici e un generale aumento del benessere fisico. ",
      img: Posturale,
    },
    {
      titolo: "Ginnastica Dolce",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "La Ginnastica Dolce è un' attività graduale e a basso impatto focalizzata su movimenti lenti e controllati per migliorare mobilità , forza e flessibilità. E' l'ideale per chiunque desideri mantenersi attivo, inclusi principianti, persone sedentarie o anziani. Questa attività garantisce un miglioramento della postura, della salute cardiovascolare e un generale senso di benessere senza stress per le articolazioni.",
      img: Dolce,
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [location]);

  return (
    <>
      <Navigation3 />
      <Container className="">
        <h1 className="text-center custom-text mb-5 fw-bold text-uppercase ">
          Corsi e Allenamenti
        </h1>

        <Row className="g-4 justify-content-center">
          {corsi.map((corso, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              id={
                corso.titolo === "Personal Training" ? "personal-training" : ""
              }
            >
              <Card
                className="h-100 mx-auto shadow-lg border-1 d-flex flex-column justify-content-between"
                style={{
                  width: "20rem",
                  border: "rgb(77, 147, 172)",
                  color: "rgb(109, 106, 106)",
                }}
              >
                <div>
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    src={corso.img}
                    alt={corso.titolo}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      /* borderBottom: "3px solid rgba(255,255,255,0.2)", */
                    }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title
                        style={{ color: "rgb(77, 147, 172)" }}
                        className="fw-bold text-center mb-2"
                      >
                        {corso.titolo}
                      </Card.Title>
                      <Card.Text className="text-center small mb-1">
                        {corso.persone}
                      </Card.Text>
                      <Card.Text className="text-center small mb-3">
                        {corso.durata}
                      </Card.Text>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {corso.descrizione}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
