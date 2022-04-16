import React from 'react'
import './Customer.css'
import CustomerDetails from './CustomerDetails'



export default function Customer(props) {
  const h1style ={
    color :'red',
     textAlign: 'centre',
     margin: '0px 0px 0px 150px'
  };
  return (
  <div className='customer'>
         <h1 className='title' style={h1style}>ANNAMPALI CHEMIST</h1>
    {
      props.details.map((item, index) => {
        return <CustomerDetails key={index} {...item}></CustomerDetails>
      })
    }
  </div>
  )
}
