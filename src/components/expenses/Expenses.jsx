import { ExpensesItem } from "../expensesitem/ExpensesItem";
export const Expenses = ({expenses}) => {
  return (
    <ul>
      {expenses.map((elem) => {
        return (
          <ExpensesItem
            title={elem.title}
            price={elem.price}
            data={elem.date}
          />
        );
      })}
    </ul>
  );
};
