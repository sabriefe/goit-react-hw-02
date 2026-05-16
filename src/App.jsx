import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Description from "./components/Description/Description.jsx";

function App() {
  const [values, setValues] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("feed-back-data"));

    return (
      savedData || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("feed-back-data", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (type) => {
    setValues((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positivePercent = totalFeedback
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  const hasFeedback = totalFeedback > 0;

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={reset}
        hasFeedback={hasFeedback}
      />

      <Feedback
        values={values}
        total={totalFeedback}
        positive={positivePercent}
        hasFeedback={hasFeedback}
      />
    </>
  );
}

export default App;
