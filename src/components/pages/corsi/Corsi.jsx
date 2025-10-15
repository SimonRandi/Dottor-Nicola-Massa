import { Card, Container, Row, Col } from "react-bootstrap";
const Funzionale = "/image/corsi/funzionale.webp";
const Personal = "/image/corsi/personal.webp";
const Posturale = "/image/corsi/posturale.webp";
const Dolce = "/image/corsi/dolce.webp";
import Navigation3 from "../../navigation/Navigation3";
import Footer from "../../footer/Footer";
import "../corsi/Corsi.css";

export default function Corsi() {
  const corsi = [
    {
      titolo: "Allenamento Funzionale",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "Attività aerobica con circuiti di allenamento mirata al rinforzo muscolare e alla ricomposizione corporea. Esercizi a corpo libero o con attrezzi come kettlebell, palle mediche e bande elastiche.",
      img: Funzionale,
    },
    {
      titolo: "Personal Training",
      persone: "1 persona",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "Seduta individuale con un trainer qualificato. Analisi iniziale, piano personalizzato e monitoraggio costante per raggiungere i tuoi obiettivi.",
      img: Personal,
    },
    {
      titolo: "Ginnastica Posturale",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "Ginnastica personalizzata per migliorare la postura e prevenire dolori muscolo-scheletrici. Adatta a tutte le età.",
      img: Posturale,
    },
    {
      titolo: "Ginnastica Dolce",
      persone: "Max 2 persone per turno",
      durata: "Durata seduta - 50 minuti",
      descrizione:
        "Attività graduale e sicura per migliorare mobilità, postura e salute cardiovascolare. Perfetta per chi desidera mantenersi attivo.",
      img: Dolce,
    },
  ];

  return (
    <>
      <Navigation3 />
      <Container className="">
        <h1 className="text-center custom-text mb-5 fw-bold text-uppercase ">
          Corsi e Allenamenti
        </h1>

        <Row className="g-4 justify-content-center">
          {corsi.map((corso, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                className="h-100 mx-auto shadow-lg border-1 d-flex flex-column justify-content-between"
                style={{
                  width: "18rem",
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
                        style={{ color: "black" }}
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
