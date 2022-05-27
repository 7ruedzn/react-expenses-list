import { useState } from 'react'
import './NewExpense.scss'
import Card from '../Card/Card'

const NewExpense = (props : any) => {
    const [showAddExpense, setShowAddExpense] = useState(false)
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
            id: Math.random() * 100,
            title: formInputs.enteredTitle,
            price: formInputs.enteredAmount,
            date: new Date(formInputs.enteredDate) 
        }

        props.onSaveExpense(expenseData)

        setFormInputs({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })

        setShowAddExpense(false)
        console.log(expenseData)
    }

    const ShowAddExpense = () => {
        setShowAddExpense(true)   
    }

    const HideAddExpense = () => {
        setShowAddExpense(false)
    }

    if(!showAddExpense){
        return (
            <div className='new-expense-container'>
                <button id='add-expense' onClick={ShowAddExpense} >Add New Expense</button>
            </div>
        )
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
                    <button type='button' onClick={HideAddExpense}>Cancel</button>
                </form>
            </div>
        </Card>
    )
}

export default NewExpense