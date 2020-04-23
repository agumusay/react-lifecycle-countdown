import React, { useState } from "react";
import "./App.scss";

import Countdown from "./components/Countdown/countdown";
import Reveal from "./components/Reveal/reveal";

function App() {
  const [timeOver, setTimeOver] = useState(1);

  let timeFromChild = (time) => {
    setTimeOver(time);
  };

  console.log(timeOver);
  return (
    <div className="App">
      {timeOver > 0 ? (
        <Countdown endTime="2020-05-23 23:37" parentFunction={timeFromChild} />
      ) : (
        <Reveal text="Bombastic Reveal" />
      )}
    </div>
  );
}

export default App;
