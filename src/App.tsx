import React, {useState} from "react";
import DisplayDice from "./Components/DisplayDice/displayDice";
import DisplayWinner from "./Components/DisplayWinner/displayWinner";
import { Container, Row, Col, Button } from "react-bootstrap";
const App = () => {
const [playerOneRoll, setPlayerOneRoll] = useState(0)
const [playerTwoRoll, setPlayerTwoRoll] = useState(0)
const [disabledPlayerOne, setDisabledPlayerOne ] = useState(false);
const [disabledPlayerTwo, setDisabledPlayerTwo ] = useState(true);
  const getPlayerOneRoll = () => {
    let randomNumber: number = Math.floor(Math.random() * 6);
    setPlayerOneRoll(randomNumber);
    setDisabledPlayerOne(true)
    setDisabledPlayerTwo(false)

  }
  const getPlayerTwoRoll = () => {
    let randomNumber: number = Math.floor(Math.random() * 6);
    setPlayerTwoRoll(randomNumber);
    setDisabledPlayerOne(false)
    setDisabledPlayerTwo(true)
  }
  return (
    <>
    <Container>
      <Row >
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice playerRoll={playerOneRoll}/>
            <h1>Player One</h1>
            <Button  disabled={disabledPlayerOne} onClick={getPlayerOneRoll}>Roll Dice</Button>
            </div>
          </Col>
          <Col sm={6}>
            <div className="text-center mt-5">
              <DisplayDice playerRoll={playerTwoRoll}/>
            <h1>Player Two</h1>
            <Button disabled={disabledPlayerTwo} onClick={getPlayerTwoRoll}>Roll Dice</Button>
            </div>
          </Col>
      </Row>
    </Container>
    <DisplayWinner playerOneRoll={playerOneRoll} playerTwoRoll={playerTwoRoll}/>
    </>
  );
};

export default App;
