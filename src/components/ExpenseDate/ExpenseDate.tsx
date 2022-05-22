import './ExpenseDate.scss'

interface Props {
    date: Date
}

const ExpenseDate = (props: Props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleDateString('pt-BR', { month: "long" })
    const day = props.date.toLocaleDateString('pt-BR', { month: "2-digit" })
    
    return (
        <div className="date-container">
            <p>{year}</p>
            <p className="month">{month}</p>
            <p className='day'>{day}</p>
        </div>
    )
}

export default ExpenseDate