import './App.css';
// import { NewExpenses } from './components/new-expenses/NewExpenses';
import { Expenses } from './components/expenses/Expenses';
const expenses = [
  {
    title: "туалетная бумага",
    price: 300,
    date: new Date(),
  },
  {
    title: "наушники",
    price: 400,
    date: new Date(),
  },
];

function App() {
  return (
    <div >
       {/* <NewExpenses/> */}
      <Expenses expenses={expenses}/>
    </div>
  );
}
console.log(App)
export default App;
