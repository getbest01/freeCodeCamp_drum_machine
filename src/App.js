import "./App.css";
import { useState } from "react";

import music1 from "./sound/CYCdh_K1close_ClHat-05.wav";
import music2 from "./sound/CYCdh_K1close_Flam-03.wav";
import music3 from "./sound/CYCdh_K1close_Kick-08.wav";
import music4 from "./sound/CYCdh_K1close_OpHat-01.wav";
import music5 from "./sound/CYCdh_K1close_PdHat-01.wav";
import music6 from "./sound/CYCdh_K1close_Rim-02.wav";
import music7 from "./sound/CYCdh_K1close_SdSt-04.wav";
import music8 from "./sound/CYCdh_K1close_Snr-03.wav";
import music9 from "./sound/CYCdh_K1close_SnrOff-06.wav";

function App() {
  const [displayId, setDisplayId] = useState("");
  const keys = [
    { key: "Q", url: music1 },
    { key: "W", url: music2 },
    { key: "E", url: music3 },
    { key: "A", url: music4 },
    { key: "S", url: music5 },
    { key: "D", url: music6 },
    { key: "Z", url: music7 },
    { key: "X", url: music8 },
    { key: "C", url: music9 },
  ];

  const handleKeyDown = (e) => {
    keys.map((data) => data.key).indexOf(e.key.toUpperCase()) >= 0
      ? playAudio(e.key.toUpperCase())
      : alert("invalid Key Pressed!!");
  };

  const handleClick = (e) => {
    playAudio(e.target.innerText);
  };

  const playAudio = (keyChar) => {
    setDisplayId(keyChar);
    const rCol = Math.floor(Math.random() * 255);
    const gCol = Math.floor(Math.random() * 255);
    const bCol = Math.floor(Math.random() * 255);

    document
      .getElementById(keyChar)
      .setAttribute("style", `background-color: rgb(${rCol},${gCol},${bCol})`);

    document
      .getElementsByClassName("clip")
      [keys.map((data) => data.key).indexOf(keyChar)].play();
  };

  const buttons = keys.map((data, idx) => (
    <div
      className="drum-pad"
      id={data.key}
      onClick={handleClick}
      key={idx}
      value={data.key}
    >
      {data.key}
      <audio className="clip" id={data.key} src={data.url}></audio>
    </div>
  ));

  const randomPlay = () => {
    let randomNumber = 0;
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 9);
        playAudio(keys[randomNumber].key);
      }, i * 170);
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>DRUM PAD</h1>
      <h1 id="display">what pad to play: {displayId}</h1>
      <div id="drum-machine">{buttons}</div>
      <button className="btn btn-success" onClick={randomPlay}>
        {" "}
        Random Play
      </button>
    </div>
  );
}

export default App;
