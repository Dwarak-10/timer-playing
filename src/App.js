import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

function App() {
  const [runBtn, setRunBtn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [startBtn, setStartBtn] = useState(false);

  return (
    <div>
      <Header
        setRunBtn={setRunBtn}
        setStartTime={setStartTime}
        startBtn={startBtn}
        setStartBtn={setStartBtn}
      />
      <Body
        runBtn={runBtn}
        setRunBtn={setRunBtn}
        startTime={startTime}
        startBtn={startBtn}
      />
    </div>
  );
}

export default App;
