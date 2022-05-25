import { useState } from 'react'
import './NewExpense.scss'
import Card from '../Card/Card'

const NewExpense = (props : any) => {
    const [formInputs, setFormInputs] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChange = (e : any) => {
        setFormInputs((prevState) => {
            return {...prevState, enteredTitle: e.target.value}
        })    
    }

    const amountChange = (e : any) => {
        setFormInputs((prevState) => {
            return {...prevState, enteredAmount: e.target.value}
        })    
    }

    const dateChange = (e : any) => {
        setFormInputs((prevState) => {
            return {...prevState, enteredDate: e.target.value}
        })    
    }

    const submitHandler = (e: any) => {
        e.preventDefault()

        const expenseData = {
            title: formInputs.enteredTitle,
            amount: formInputs.enteredAmount,
            date: new Date(formInputs.enteredDate) 
        }

        props.onSaveExpense(expenseData)

        setFormInputs({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })

        console.log(expenseData)
    }

    return (
        <Card>
            <div className="new-expense-container">
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label htmlFor="">Title</label>
                        <input type="text" value={formInputs.enteredTitle} onChange={titleChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="">Amount</label>
                        <input type="number" value={formInputs.enteredAmount} step={10} min={0.01}  onChange={amountChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="">Date</label>
                        <input type="date" value={formInputs.enteredDate} onChange={dateChange}/>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </Card>
    )
}

export default NewExpense