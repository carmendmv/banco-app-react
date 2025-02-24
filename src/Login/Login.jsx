import { useRef } from "react";
import PropTypes from "prop-types";
import "./Login.css";

function Login({ onLogin }) {
  const userRef = useRef();
  const pinRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pin = pinRef.current.value;
    onLogin(user, pin);
  };

  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        ref={userRef}
      />
      <input
        type="password"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
        ref={pinRef}
      />
      <button type="submit" className="login__btn" onClick={handleSubmit}>
        →
      </button>
    </form>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
