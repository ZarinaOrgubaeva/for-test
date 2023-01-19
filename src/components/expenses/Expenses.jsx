import { ExpensesItem } from "../expenses-item/ExpensesItem";

export const Expenses = ({expenses}) => {
  return (
    <ul>
      {expenses.map((element) => {
        return (
          <ExpensesItem
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </ul>
  );
};
console.log(Expenses)
console.log(ExpensesItem)
