import './App.css';
import ListPicker from "./components/ListPicker";
import {useEffect, useState} from "react";
import Scoreboard from "./components/Scoreboard";
import {Flex} from "@chakra-ui/react";
import Settings from "./components/Settings";

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [times, setTimes] = useState([]);
  const [first, setFirst] = useState(true);
  const [id, setId] = useState(0);
  const [settings, setSettings] = useState({
    numberOfLinks: 48
  })
  const [settingsActual, setSettingsActual] = useState(settings);

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

  const resetScoreboard = () => {
    setCorrectCount(0);
    setIncorrectCount(0);
    setTimes([]);
    setId(0);
  }

  const applySettings = () => {
    setSettingsActual({...settings});
    resetScoreboard();
  }

  return (
    <div className="App">
      <ListPicker finished={callback} id={id} settings={settingsActual} />
      <Flex borderLeft={'1px solid black'} direction={'column'} width={'33%'} padding={'1em'} height={'100%'}>
        <Scoreboard correctCount={correctCount} incorrectCount={incorrectCount} times={times} id={id} />
        <Settings settings={settings} setSettings={setSettings} applySettings={applySettings} resetScoreboard={resetScoreboard} />
      </Flex>
    </div>
  );
}

export default App;
