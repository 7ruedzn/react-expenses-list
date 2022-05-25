import ExpenseItem from "../ExpenseItem/ExpenseItem"

const Expenses = (props: any) => {
    return (
        <div>
            <ExpenseItem title={props.expensesList[0].title} price={props.expensesList[0].price} date={props.expensesList[0].date} />
            <ExpenseItem title={props.expensesList[1].title} price={props.expensesList[1].price} date={props.expensesList[1].date} />
            <ExpenseItem title={props.expensesList[2].title} price={props.expensesList[2].price} date={props.expensesList[2].date} />
        </div>
    )
}

export default Expenses