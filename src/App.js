import React, { useState } from "react";
import "./App.scss";
import Countdown from "./components/Countdown/countdown";
import Reveal from "./components/Reveal/reveal";
import lightImage from "./assets/images/abstract-267046_1920.png";

function App() {
  const [timeOver, setTimeOver] = useState(1);
  let timeFromChild = (time) => {
    setTimeOver(time);
  };

  return (
    <div className="App">
      {timeOver > 0 ? (
        <Countdown
          endTime="2020-05-26"
          parentFunction={timeFromChild}
          theme="light"
          background={lightImage}
        />
      ) : (
        <Reveal text="Some fancy reveal text..." />
      )}
    </div>
  );
}

export default App;
