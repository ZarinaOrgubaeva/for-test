import { useState } from "react";
import { ExpenseForm } from "../Expense-form/ExpenseForm";
import Button from "../UI/button/Button";

export const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);//false // useState function / setShowForm-> setState function
   const [text,setText] = useState("") //''
   const [text2,setText2] = useState("") //''


  const showExpensesForm = async () => {
    setText("jfjkdshf")
    await fetch('')
    setText2("bfshdjbf")
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {showForm ? (
        <ExpenseForm onshowForm={showExpensesForm} />
      ) : (
        <Button title={"добаваить новый расход"} onClick={showExpensesForm} />
      )}
    </div>
  );
};
