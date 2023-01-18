import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpenses } from "./components/new-expenses/NewExpenses";
const expenses = [
  {
    title: "туалетная бумага",
    price: 300,
    date: new Date(),
  },
];
function App() {
  const addNewExpensesHandler = (data) => {
    expenses.push(data);
  };
  return (
    <div>
      <NewExpenses onNewExpenseAdd={addNewExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

//reactive(state,Vdom)
//state
//render
//each component has own state
//lifting state up
//children
//keys
