//rafce for easy create this component
import React from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
type propsPlayerRole = {
  playerRoll: number
}
const DisplayDice = (props: propsPlayerRole) => {
    const {playerRoll} = props;
  const allDice = [
    <FaIcons.FaDiceOne />,
    <FaIcons.FaDiceTwo />,
    <FaIcons.FaDiceThree />,
    <FaIcons.FaDiceFour />,
    <FaIcons.FaDiceFive />,
    <FaIcons.FaDiceSix  />,
  ];
  return (
      <IconContext.Provider value={{color: "red", size: "5rem"}}>
    <div>
      <div>{allDice[playerRoll]}</div>
    </div>
      </IconContext.Provider>

  );
};

export default DisplayDice;
