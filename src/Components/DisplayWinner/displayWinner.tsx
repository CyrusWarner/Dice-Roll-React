import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

type playerRoll = {
  playerOneRoll: number;
  playerTwoRoll: number;
};

const DisplayWinner = (props: playerRoll) => {
  const { playerOneRoll, playerTwoRoll } = props;
  useEffect(() => {
    getWinner();
  });
  const getWinner = () => {
    if (playerOneRoll > playerTwoRoll) {
      return;
    } else if (playerOneRoll < playerTwoRoll) {
      return;
    } else {
      return;
    }
  };
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-center mt-2">
            {playerOneRoll === 0 &&
                <h1>Roll dice to start the game!</h1>
            }
        </div>
      </Row>
    </Container>
  );
};

export default DisplayWinner;
