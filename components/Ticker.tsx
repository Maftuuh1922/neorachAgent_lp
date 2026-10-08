const ITEMS = [
  "Neorach Agent",
  "Open Source",
  "MIT License",
  "Your PC is the brain",
  "Your phone is the remote",
  "Free forever",
  "Agents that never sleep",
];

export default function Ticker() {
  const chunk = (
    <div className="ticker__chunk" aria-hidden="true">
      {ITEMS.map((t) => (
        <span key={t}>
          {t} <span className="star">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" aria-label="Neorach Agent highlights">
      <div className="ticker__track">
        {chunk}
        {chunk}
      </div>
    </div>
  );
}
