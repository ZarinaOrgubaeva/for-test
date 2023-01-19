import { ExpenseForm } from "../expenses-form/ExpensesForm";
import { Button } from "../UI/button/Button";
export const NewExpenses = () => {
  return (
    <div>
      <ExpenseForm />
      <Button title="добаваить новый расход"/>
    </div>
  );
};
