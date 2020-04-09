import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.title}</button>
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));