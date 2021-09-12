//rafce for easy create this component
import React from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
const DisplayDice = (props: any) => {
    const {playerOneRole} = props;
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
      <div>{allDice[playerOneRole]}</div>
    </div>
      </IconContext.Provider>

  );
};

export default DisplayDice;
