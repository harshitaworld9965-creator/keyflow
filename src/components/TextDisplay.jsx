import "./TextDisplay.css";

export default function TextDisplay({ phrase, typed }) {
  return (
    <div className="text-display">
      {phrase.split("").map((char, index) => {
        let state = "pending";
        if (index < typed.length) {
          state = typed[index] === char ? "correct" : "wrong";
        } else if (index === typed.length) {
          state = "current";
        }

        return (
          <span
            key={index}
            className={`text-display__char text-display__char--${state}`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}