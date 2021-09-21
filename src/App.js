import './App.css';
import ListPicker from "./components/ListPicker";
import {useEffect, useState} from "react";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [times, setTimes] = useState([]);
  const [first, setFirst] = useState(true);
  const [id, setId] = useState(0);

  const callback = (correct, time) => {
    setId(id + 1);
    if (first) {
      setFirst(false);
      return;
    }

    if (correct) {
      setCorrectCount(correctCount + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }

    times.push(time / 1000.0);
    setTimes([...times]);
  }

  return (
    <div className="App">
      <ListPicker finished={callback} id={id} />
      <Scoreboard correctCount={correctCount} incorrectCount={incorrectCount} times={times} id={id} />
    </div>
  );
}

export default App;
