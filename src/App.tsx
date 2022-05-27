import "./App.scss";
import Card from './components/Card/Card'
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const NewExpenseData = (expense: any) => {
    console.log(`Expense in App.tsx -> ${expense}`)
  }

  const items = [
    {
      title: "Car",
      price: 48934,
      date: new Date(2022, 1, 2),
    },
    {
      title: "Bicicleta",
      price: 434,
      date: new Date(2021, 6, 12),
    },
    {
      title: "Car",
      price: 48934,
      date: new Date(2019, 5, 5),
    },
  ];
  
  return (
      <Card>
        <NewExpense onSaveExpense={NewExpenseData}/> 
        <Expenses expensesList={items}/>
      </Card>
  );
}

export default App;
