import React, { useState } from 'react'
import './CustomerForm.css'

export default function CustomerForm(props) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const onTitleChangedHandler = (event) => {
    setTitle(event.target.value);
  }

  const onAmountChangedHandler = (event) => {
    setAmount(event.target.value);
  }

  const onDateChangedHandler = (event) => {
    setDate(event.target.value);
  }

  const submitRequestHandler = (event) => {
    event.preventDefault();
    const data = {
      name: title,
      price: amount,
      date: new Date(date),
    }

props.formData(data);

    setTitle('');
    setAmount('');
    setDate('');
  }
  return (
    <form onSubmit={submitRequestHandler}>
      <div className="new-expense__controls" >
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"
            onChange={onAmountChangedHandler} value={amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={onDateChangedHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
