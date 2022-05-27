import "./App.scss";
import Card from './components/Card/Card'
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const expensesItems = [
  {
    id: 1,
    title: "Car",
    price: 48934,
    date: new Date(2022, 1, 2),
  },
  {
    id: 2,
    title: "Bicicleta",
    price: 434,
    date: new Date(2021, 6, 12),
  },
  {
    id: 3,
    title: "Car",
    price: 48934,
    date: new Date(2019, 5, 5),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(expensesItems)

  const NewExpenseData = (expense: any) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
    console.log(`Expense in App.tsx -> ${expense}`)
    console.log(`Expense in App.tsx -> ${expensesItems}`)
  }
  
  return (
      <Card>
        <NewExpense onSaveExpense={NewExpenseData}/> 
        <Expenses expensesList={expenses}/>
      </Card>
  );
}

export default App;
