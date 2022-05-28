import { useState } from 'react'
import './NewExpense.scss'
import Card from '../Card/Card'

const NewExpense = (props : any) => {
    const [showAddExpense, setShowAddExpense] = useState(false)
    const [formInputs, setFormInputs] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })

    const titleChange = (e : any) => {
        setFormInputs((prevState) => {
            return {...prevState, enteredTitle: e.target.value}
        })    
    }

    const amountChange = (e : any) => {
        setFormInputs((prevState) => {
            return {...prevState, enteredPrice: e.target.value}
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
            price: +formInputs.enteredPrice,
            date: new Date(formInputs.enteredDate) 
        }

        props.onSaveExpense(expenseData)

        setFormInputs({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: '',
        })

        setShowAddExpense(false)
    }

    const ShowAddExpense = () => {
        setShowAddExpense(true)   
    }

    const HideAddExpense = () => {
        setShowAddExpense(false)
    }

    if(!showAddExpense){
        return (
            <div className='new-expense'>
                <button id='add-expense' onClick={ShowAddExpense} >Add New Expense</button>
            </div>
        )
    }

    return (
        <Card>
            <div className="new-expense">
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label htmlFor="">Title</label>
                        <input type="text" value={formInputs.enteredTitle} onChange={titleChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="">Price</label>
                        <input type="number" value={formInputs.enteredPrice} step={10} min={0.01}  onChange={amountChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="">Date</label>
                        <input type="date" value={formInputs.enteredDate} onChange={dateChange}/>
                    </div>
                    <div className="actions">
                        <button type='submit'>Send</button>
                        <button type='button' onClick={HideAddExpense}>Cancel</button>
                    </div>
                </form>
            </div>
        </Card>
    )
}

export default NewExpense