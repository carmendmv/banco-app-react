import PropTypes from "prop-types";
import "./Balance.css";

function Balance({ account }) {
  if (!account) return null;

  const balance = account.movements.reduce(
    (total, movement) => total + movement,
    0,
  );

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{new Date().toLocaleDateString()}</span>
        </p>
      </div>
      <p className="balance__value">{balance.toFixed(2)}€</p>
    </div>
  );
}

Balance.propTypes = {
  account: PropTypes.shape({
    movements: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default Balance;
