import { useState, useEffect } from "react";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import Balance from "./Balance/Balance";
import Movements from "./Movements/Movements";
import Summary from "./Summary/Summary";
import Operations from "./Operations/Operations";
import "./App.css";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [accounts, setAccounts] = useState([
    {
      owner: "Juan Sánchez",
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2,
      pin: "1111",
    },
    {
      owner: "María Portazgo",
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: "2222",
    },
    {
      owner: "Estefanía Pueyo",
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: "3333",
    },
    {
      owner: "Javier Rodríguez",
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: "4444",
    },
  ]);

  // Crear usernames al cargar el componente
  useEffect(() => {
    const accountsWithUsernames = accounts.map((account) => ({
      ...account,
      username: account.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""),
    }));
    setAccounts(accountsWithUsernames);
  }, []);

  const handleLogin = (username, pin) => {
    const account = accounts.find(
      (acc) => acc.username === username && acc.pin === pin,
    );

    if (account) {
      setCurrentAccount(account);
      console.log("Login successful!");
    } else {
      console.log("Invalid credentials!");
    }
  };

  return (
    <>
      <nav>
        <Welcome account={currentAccount} />
        <img src="logo.png" alt="Logo" className="logo" />
        <Login onLogin={handleLogin} />
      </nav>

      <main className="app" style={{ opacity: currentAccount ? 1 : 0 }}>
        {/* BALANCE */}
        <Balance account={currentAccount} />

        {/* MOVEMENTS */}
        <Movements account={currentAccount} />

        {/* SUMMARY */}
        <Summary account={currentAccount} />

        {/* OPERATIONS */}
        <Operations
          account={currentAccount}
          onTransfer={() => {}}
          onLoan={() => {}}
          onClose={() => {}}
        />
      </main>
    </>
  );
}

export default App;
