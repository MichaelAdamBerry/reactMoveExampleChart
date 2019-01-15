import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Animate from "react-move/Animate";
import BarChart from "./BarChart";

let getRandom = () => 600 * Math.random();

class Dot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: getRandom()
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ x: getRandom() });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Update</button>
        </div>
        <svg width="800" height="100">
          <Animate
            start={{ cx: 0 }}
            enter={{ cx: [this.state.x] }}
            update={{ cx: [this.state.x] }}>
            {d => <circle cx={d.cx} cy={"50"} r="20" fill="#368f8b" />}
          </Animate>
        </svg>
      </div>
    );
  }
}

ReactDOM.render(<BarChart />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
