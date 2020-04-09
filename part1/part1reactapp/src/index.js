import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.title}</button>
);

const Statistics = (props) => (
  <div>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>all {props.good + props.neutral + props.bad}</p>
    <p>
      Average{" "}
      {(props.good * 1 + props.neutral * 0 + props.bad * -1) /
        (props.good + props.neutral + props.bad)}{" "}
    </p>
    <p>
      positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %
    </p>
  </div>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} title="Good"></Button>

        <Button
          handleClick={() => setNeutral(neutral + 1)}
          title="Neutral"
        ></Button>

        <Button handleClick={() => setBad(bad + 1)} title="Bad"></Button>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
