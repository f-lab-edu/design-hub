import React from "react";

import { Slider } from "@ark-ui/react";

import { css } from "./styled-system/css";

import "./App.css";

function App() {
  return (
    <div>
      <span className={css({ color: "red.300", bg: "yellow.100" })}>악</span>
      Hello 🐼!
      <p className={css({ color: "blue.300" })}>드디어 성공...</p>
      <Slider.Root>
        <Slider.Label className={css({ color: "yellow.500" })}>
          Label
        </Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb key={0} index={0} />
        </Slider.Control>
      </Slider.Root>
    </div>
  );
}

export default App;
