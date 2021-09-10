import React, {useState} from "react";
import DisplayDice from "./Components/DisplayDice/displayDice";
import { Container, Row, Col, Button } from "react-bootstrap";
const App = () => {
const [randomInt, setRandomInt] = useState(0)
  const getRandomNumber = () => {
    let randomNumber: number = Math.floor(Math.random() * 6);
    setRandomInt(randomNumber);

  }
  return (
    <Container>
      <Row >
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice randomInt={randomInt}/>
            <h1>Player One</h1>
            <Button onClick={getRandomNumber}>Roll Dice</Button>
            </div>
          </Col>
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice randomInt={randomInt}/>
            <h1>Player Two</h1>
            <Button onClick={getRandomNumber}>Roll Dice</Button>
            </div>
          </Col>
      </Row>
    </Container>
  );
};

export default App;
