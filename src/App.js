import React, { Component } from "react";
import Line from "./components/figures/Line";
import TShape from "./components/figures/TShape";

class App extends Component {
  render() {
    return (
      <div className="canvas_wrap">
        <Line />
        <TShape />
        <canvas id="tetris" width="240" height="400" />
        <button type="button" id="start_game">
          Start
        </button>
      </div>
    );
  }
}
export default App;
