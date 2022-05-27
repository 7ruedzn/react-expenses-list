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
  return (
    <li>
        <Card>
          <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="name-price">
                <h2 className="name">{props.title}</h2>
                <div className="price">${props.price}</div>
            </div>
          </div>
        </Card>
    </li>
  );
}

export default ExpenseItem;
