import { useState } from "react";
import classes from "./App.module.css";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Expense Tracker - Basic</h1>
      <div className={classes.container}>
        <label>
          <b>Balance: {balance}</b>
        </label>
        <br />
        <input type="number" name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />{" "}
        <br />
        <button
          onClick={() => {
            if (amount != 0) {
              setBalance(balance + amount);
              setTransactions([...transactions, new Date().toLocaleString() + " - " + amount + " - Add"]);
            } else {
              alert("Cannot add O rupees to your account");
            }
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            if (amount != 0) {
              if (balance >= amount) {
                setBalance(balance - amount);
                setTransactions([...transactions, new Date().toLocaleString() + " - " + amount + " - Remove"]);
              } else {
                alert("Request amount to remove is greater than current balance");
              }
            } else {
              alert("Cannot remove O rupees to your account");
            }
          }}
        >
          Remove
        </button>
      </div>
      <div className={classes.container}>
        <b>Transactions:</b>
        <br />
        {transactions.map((transaction, index) => (
          <div key="index">
            <label>{transaction}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
