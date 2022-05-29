import "./App.scss";
import Card from './components/Card/Card';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const expensesItems = [
  {
    id: 1,
    title: "Book",
    price: 40.97,
    date: new Date(2022, 1, 2),
  },
  {
    id: 2,
    title: "Bicicleta",
    price: 25.50,
    date: new Date(2022, 6, 12),
  },
  {
    id: 3,
    title: "Mouse",
    price: 35.35,
    date: new Date(2019, 5, 5),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(expensesItems)

  const NewExpenseData = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  
  return (
      <Card>
        <NewExpense onSaveExpense={NewExpenseData}/> 
        <Expenses expensesList={expenses}/>
      </Card>
  );
}

export default App;
