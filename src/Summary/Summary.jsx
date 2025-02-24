import PropTypes from "prop-types";
import "./Summary.css";

function Summary({ account }) {
  if (!account) return null;

  const sumIn = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const sumOut = Math.abs(
    account.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0),
  );

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .reduce((acc, interest) => acc + interest, 0);

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{sumIn.toFixed(2)}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{sumOut.toFixed(2)}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">
        {interest.toFixed(2)}€
      </p>
      <button className="btn--sort">↓ SORT</button>
    </div>
  );
}

Summary.propTypes = {
  account: PropTypes.shape({
    movements: PropTypes.arrayOf(PropTypes.number).isRequired,
    interestRate: PropTypes.number.isRequired,
  }),
};

export default Summary;
