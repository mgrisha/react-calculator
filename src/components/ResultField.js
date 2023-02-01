import { Textfit } from 'react-textfit'

import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const ResultField = () => {
  const { calc } = useContext(CalcContext);
  return (
    <Textfit className='result--field' max={70} mode='single'>{calc.num ? calc.num : calc.res}</Textfit>
  );
}

export default ResultField;