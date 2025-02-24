import "./Movements.css";

function Movements() {
  const movements = [
    { type: "deposit", amount: "4 000", date: "3 days ago" },
    { type: "withdrawal", amount: "-378", date: "24/01/2037" },
    { type: "deposit", amount: "1 500", date: "12/01/2037" },
    { type: "withdrawal", amount: "-200", date: "01/01/2037" },
  ];

  return (
    <div className="movements">
      {movements.map((movement, index) => (
        <div key={index} className="movements__row">
          <div className={`movements__type movements__type--${movement.type}`}>
            {movement.type === "deposit" ? "Deposit" : "Withdrawal"}
          </div>
          <div className="movements__date">{movement.date}</div>
          <div className="movements__value">{movement.amount}€</div>
        </div>
      ))}
    </div>
  );
}

export default Movements;
