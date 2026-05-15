import css from "./Feedback.module.css";
import { useState, useEffect } from "react";

const Feedback = () => {
  const [values, setValues] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feed-back-data"));
    if (savedData !== null) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feed-back-data", JSON.stringify(values));
  }, [values]);
  const setgood = () => {
    setValues((prev) => ({
      ...prev,
      good: prev.good + 1,
    }));
  };
  const setbad = () => {
    setValues((prev) => ({
      ...prev,
      bad: prev.bad + 1,
    }));
  };
  const setneutral = () => {
    setValues((prev) => ({
      ...prev,
      neutral: prev.neutral + 1,
    }));
  };
  const reset = () => {
    setValues({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };
  let totalFeedback = values.bad + values.good + values.neutral;
  const positivePercent = totalFeedback
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;
  const hasFeedback = totalFeedback > 0;
  return (
    <>
      <h1>Sip Happens Café</h1>
      <h3>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h3>
      <button className={css.buttons} onClick={setgood}>
        Good
      </button>
      <button className={css.buttons} onClick={setneutral}>
        Neutral
      </button>
      <button className={css.buttons} onClick={setbad}>
        Bad
      </button>
      {!hasFeedback && <p>No feedback yet</p>}
      {hasFeedback && (
        <>
          <button className={css.buttons} onClick={reset}>
            Reset
          </button>
          <p>Good: {values.good}</p>
          <p>Neutral: {values.neutral}</p>
          <p>Bad: {values.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positivePercent}%</p>
        </>
      )}
    </>
  );
};

export default Feedback;
