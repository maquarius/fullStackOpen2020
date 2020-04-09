import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.title}</button>
);

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return <h3>No feedback given yet</h3>;
  } else {
    return (
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>
          Average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}{" "}
        </p>
        <p>positive {(good / (good + neutral + bad)) * 100} %</p>
      </div>
    );
  }
};

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

        <Button handleClick={() => setBad(bad + 1)} title="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>

        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
