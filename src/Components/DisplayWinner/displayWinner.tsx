import React from "react";
import { Container, Row } from "react-bootstrap";

type playerRoll = {
  playerOneRoll: number;
  playerTwoRoll: number;
};

const DisplayWinner = (props: playerRoll) => {
  const { playerOneRoll, playerTwoRoll } = props;
  const getWinner = () => {
    if(playerOneRoll === 0 && playerTwoRoll === 0)
    {
        return <h1>Roll The Dice To Start The Game</h1>
    }
    else if (playerOneRoll > playerTwoRoll) {
        return <h1>Player One Won The Round!</h1>
    } else if (playerOneRoll < playerTwoRoll) {
        return <h1>Player Two Won The Round!</h1> 
    } else {
        return <h1>It Was A Tie!</h1>
    }
  };
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-center mt-2">
            {getWinner()}
        </div>
      </Row>
    </Container>
  );
};

export default DisplayWinner;
