import PropTypes from "prop-types";
import "./Movements.css";

function Movements({ account }) {
  if (!account) return null;

  return (
    <div className="movements">
      {account.movements.map((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdrawal";
        return (
          <div className="movements__row" key={i}>
            <div className={`movements__type movements__type--${type}`}>
              {i + 1} {type}
            </div>
            <div className="movements__date">3 days ago</div>
            <div className="movements__value">{mov.toFixed(2)}€</div>
          </div>
        );
      })}
    </div>
  );
}

Movements.propTypes = {
  account: PropTypes.shape({
    movements: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default Movements;
