import React from 'react'
import './NewCustomer.css'
import CustomerForm from './CustomerForm'

export default function NewCustomer(props) {

  const getDatafromFormComponent = (data) => {
  const addId = {
    id:Math.random(),
    ...data
  }
  
  props.addDataApp(addId);
  }

  return (
    <div className="new-expense">
        <CustomerForm formData = {getDatafromFormComponent}></CustomerForm>
    </div>
  )
}
