import Button from "./components/Button";
import ResultField from "./components/ResultField";
import CalcProvider from "./context/CalcContext";

const buttonsValue = [
  ['C', '√', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
];

function App() {
  return (
    <CalcProvider>
      <div className="wrapper">
        <ResultField />
        <div className="buttons--area">
          {buttonsValue.flat().map((button, i) => (
            <Button value={button} key={i} />
          ))}
        </div>
      </div>
    </CalcProvider>
  );
}

export default App;
