import PropTypes from "prop-types";
import "./Operations.css";

function Operations({ onTransfer, onLoan, onClose }) {
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    switch (type) {
      case "transfer":
        onTransfer(formData.get("to"), Number(formData.get("amount")));
        break;
      case "loan":
        onLoan(Number(formData.get("amount")));
        break;
      case "close":
        onClose(formData.get("user"), formData.get("pin"));
        break;
    }
    e.target.reset();
  };

  return (
    <>
      <div className="operation operation--transfer">
        <h2>Transfer money</h2>
        <form
          className="form form--transfer"
          onSubmit={(e) => handleSubmit(e, "transfer")}
        >
          <input
            type="text"
            name="to"
            className="form__input form__input--to"
          />
          <input
            type="number"
            name="amount"
            className="form__input form__input--amount"
          />
          <button className="form__btn form__btn--transfer">&rarr;</button>
          <label className="form__label">Transfer to</label>
          <label className="form__label">Amount</label>
        </form>
      </div>

      <div className="operation operation--loan">
        <h2>Request loan</h2>
        <form
          className="form form--loan"
          onSubmit={(e) => handleSubmit(e, "loan")}
        >
          <input
            type="number"
            name="amount"
            className="form__input form__input--loan-amount"
          />
          <button className="form__btn form__btn--loan">&rarr;</button>
          <label className="form__label">Amount</label>
        </form>
      </div>

      <div className="operation operation--close">
        <h2>Close account</h2>
        <form
          className="form form--close"
          onSubmit={(e) => handleSubmit(e, "close")}
        >
          <input
            type="text"
            name="user"
            className="form__input form__input--user"
          />
          <input
            type="password"
            name="pin"
            maxLength="4"
            className="form__input form__input--pin"
          />
          <button className="form__btn form__btn--close">&rarr;</button>
          <label className="form__label">Confirm user</label>
          <label className="form__label">Confirm PIN</label>
        </form>
      </div>
    </>
  );
}

Operations.propTypes = {
  onTransfer: PropTypes.func.isRequired,
  onLoan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Operations;
