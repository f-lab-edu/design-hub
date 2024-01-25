import React from "react";

import { css } from "./styled-system/css";

import "./App.css";

function App() {
  return (
    <div>
      <span className={css({ color: "red.300", bg: "yellow.100" })}>악</span>
      Hello 🐼!
      <p className={css({ color: "blue.300" })}>드디어 성공...</p>
    </div>
  );
}

export default App;
