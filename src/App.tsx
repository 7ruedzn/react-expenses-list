import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Card from './components/Card/Card'

const App = () => {

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
        <ExpenseItem
          title={items[0].title}
          price={items[0].price}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          price={items[1].price}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          price={items[2].price}
          date={items[2].date}
        />
      </Card>
  );
}

export default App;
