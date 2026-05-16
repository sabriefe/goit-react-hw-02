const Feedback = ({ values, total, positive, hasFeedback }) => {
  if (!hasFeedback) {
    return <p>No feedback yet</p>;
  }

  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

export default Feedback;
