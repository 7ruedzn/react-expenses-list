import { useState } from "react"
import ExpensesChart from "../Chart/ExpensesChart"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import ExpensesList from "../ExpensesList/ExpensesList"

const Expenses = (props: any) => {
    const [yearSelected, setYear] = useState('2020')

    const expensesByYearSelected = props.expensesList.filter((expense : any) => {
        return expense.date.getFullYear() == yearSelected
    })

    const SaveYear = (year : string) => {
        setYear(year)
        console.log(`Year in Expenses.Jsx ${year}`)
    }

    return (
        <div>
            <ExpensesFilter selected={yearSelected} onYearSelected={SaveYear}/>
            <ExpensesChart expensesByYear={expensesByYearSelected}/>
            <ExpensesList items={expensesByYearSelected}/>
        </div>
    )
}

export default Expenses