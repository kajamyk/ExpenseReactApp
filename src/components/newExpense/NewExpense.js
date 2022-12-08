import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }
  const [isEditing, setIsEditing] = useState(false);
  function clickHandler() {
    setIsEditing(true);
  }
  function onCancel() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={clickHandler}>Add expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancel}
        />
      )}
    </div>
  );
}

export default NewExpense;
