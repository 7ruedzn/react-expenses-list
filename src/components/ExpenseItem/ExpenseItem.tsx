import { useState } from "react";
import "./ExpenseItem.scss";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from '../Card/Card'

interface Props {
  date: Date;
  title: string;
  price: number;
}

const ExpenseItem = (props: Props) => {

  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('updated!!!')
  }

  return (
      <Card>
        <div className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="name-price">
              <h2 className="name">{title}</h2>
              <div className="price">${props.price}</div>
          </div>
          <button onClick={clickHandler}>oioioi</button>
        </div>
      </Card>
  );
}

export default ExpenseItem;
