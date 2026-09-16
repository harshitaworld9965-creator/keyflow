import "./Stats.css";

export default function Stats({ wpm, accuracy, elapsed }) {
  return (
    <div className="stats">
      <Stat label="wpm" value={wpm} />
      <Stat label="accuracy" value={`${accuracy}%`} />
      <Stat label="time" value={`${elapsed.toFixed(1)}s`} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}