import React from "react";
import DisplayDice from "./Components/DisplayDice/displayDice";
import { Container, Row, Col } from "react-bootstrap";
const App = () => {
  return (
    <Container>
      <Row >
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice />
            <h1>Player One</h1>
            </div>
          </Col>
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice />
            <h1>Player Two</h1>
            </div>
          </Col>
      </Row>
    </Container>
  );
};

export default App;
