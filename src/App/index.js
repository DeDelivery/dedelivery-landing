import React from "react";
import { Container } from "../Container";
import { Abstract } from "../Abstract";
import { KnowUs } from "../KnowUs";
import { AppTour } from "../AppTour";
import { ChooseUs } from "../ChooseUs";
import { Team } from "../Team";
import { Partners } from "../Partners";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Abstract />
        <KnowUs />
        <AppTour />
        <ChooseUs />
        <Team />
        <Partners />
      </Container>
    </React.Fragment>
  );
}

export default App;
