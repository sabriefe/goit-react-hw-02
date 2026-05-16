import css from "./Options.module.css";

const Options = ({ onUpdate, onReset, hasFeedback }) => {
  return (
    <>
      <button className={css.buttons} onClick={() => onUpdate("good")}>
        Good
      </button>

      <button className={css.buttons} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>

      <button className={css.buttons} onClick={() => onUpdate("bad")}>
        Bad
      </button>

      {hasFeedback && (
        <button className={css.buttons} onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
