import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpensesList.scss'

const ExpensesList = (props : any) => {
    if(props.items.length > 0){
       return (
           <ul className="expenses-list">
               {
                   props.items.map((expense : any) => 
                   <ExpenseItem 
                   key={expense.id}
                   title={expense.title}
                   date={expense.date}
                   price={expense.price} />)
               }
           </ul>
       )
    }

    return <h2 className="expenses-list-not-found">No Expenses Found!</h2>
}

export default ExpensesList