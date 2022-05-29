import './ExpenseDate.scss'

interface Props {
    date: Date
}

const ExpenseDate = (props: Props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleDateString('pt-BR', { month: "long" })
    const day = props.date.toLocaleDateString('pt-BR', { month: "2-digit" })
    
    return (
        <div className="expense-date">
            <div className="expense-date-month">{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    )
}

export default ExpenseDate