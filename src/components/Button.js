import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const objClasses = {
  '=': 'equals',
  'x': 'opt',
  '-': 'opt',
  '+': 'opt',
  '/': 'opt'
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const pointClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }

  const clearClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0
    });
  }

  const handleClickNumber = () => {
    const numberToString = value.toString();
    let numberValue;
    if (numberToString === 0 && calc.num === 0) {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberToString);
    }

    setCalc({
      ...calc,
      num: numberValue
    });
  }

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
  }  

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const operationResult = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => {
            if (b > 0) {
              return a / b
            } else {
              alert('Ділення на 0 не можливе!');
            }
          }
        }
        return result[sign](a, b);
      }
      setCalc({
        res: operationResult(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      });
    }
  }

  const sqrtClick = () => {
    setCalc({
      sign: '',
      num: Math.sqrt(calc.num),
      res: Math.sqrt(calc.res)
    });
  }

  const percentClick = () => {
    setCalc({
      sign: '',
      num: calc.num / 100,
      res: calc.res / 100
    });
  }

  const buttonClick = () => {
    const results = {
      '.': pointClick,
      'C': clearClick,
      '+': signClick,
      '-': signClick,
      'x': signClick,
      '/': signClick,
      '=': equalsClick,
      '√': sqrtClick,
      '%': percentClick
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickNumber();
    }
  }

  return (
    <button onClick={() => buttonClick(value)} className={`${objClasses[value]} button`}>{value}</button>
  );
}

export default Button;