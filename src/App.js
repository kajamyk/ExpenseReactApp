import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    { title: "Car", amount: 200, date: new Date("2021", "10", "09"), id: "1" },
    {
      title: "Tablet",
      amount: 200,
      date: new Date("2021", "10", "11"),
      id: "2"
    }
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("in App"), console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};
export default App;
