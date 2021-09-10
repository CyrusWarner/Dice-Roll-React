//rafce for easy create this component
import React from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
const DisplayDice = () => {
  const allDice = [
    <FaIcons.FaDiceOne />,
    <FaIcons.FaDiceTwo />,
    <FaIcons.FaDiceThree />,
    <FaIcons.FaDiceFour />,
    <FaIcons.FaDiceFive />,
    <FaIcons.FaDiceSix  />,
  ];
  console.log(allDice);
  return (
      <IconContext.Provider value={{color: "red", size: "5rem"}}>
    <div>
      <div>{allDice[1]}</div>
    </div>
      </IconContext.Provider>

  );
};

export default DisplayDice;
