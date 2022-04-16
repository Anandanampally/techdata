import React from 'react'
import './CustomerDetails.css'
import CustomerDate from './CustomerDate'



export default function CustomerDetails(props) {
  return (
    <div className='customer-details'>
    <CustomerDate date={(props.date)}></CustomerDate>
        <div className='customer-name'><h2>{props.name}</h2></div>
        <div className='customer-price'><h2>{props.price}</h2></div>

    </div>
  )
}
