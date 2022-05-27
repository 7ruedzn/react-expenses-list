import { useState } from "react"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"

const Expenses = (props: any) => {
    const [yearSelected, setYear] = useState('2020')

    const SaveYear = (year : string) => {
        setYear(year)
        console.log(`Year in Expenses.Jsx ${year}`)
    }

    return (
        <div>
            <ExpensesFilter selected={yearSelected} onYearSelected={SaveYear}/>
            {
                props.expensesList.map((expense : any) => 
                <ExpenseItem 
                title={expense.title}
                date={expense.date}
                price={expense.price} />)
            }
        </div>
    )
}

export default Expenses