// src/Login/Login.jsx
import './Login.css';

function Login() {
  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
      />
      <input
        type="text"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
      />
      <button className="login__btn">→</button>
    </form>
  );
}

export default Login;