import React, { useContext, useEffect, useState } from 'react'
import './Components/CustomerDetails.css'
import Customer from './Components/Customer.js';
import NewCustomer from './NewRequirements/NewCustomer';
import NavBar from './NavBar/NavBar'


let dummydata = [
  {
  name : "anand",
  date: new Date(20,5,6),
  price: 123
},
{
  name : "anil",
  date: new Date(23,4,5),
  price: 123
},
{
  name : "raj",
  date: new Date(),
  price: 123
} 
];



export default function App() {

const [fat, setfatdata] = useState(dummydata);

useEffect(() => {
  fetch('http://localhost/BACKENDAPI/readApi.php').
then(res => {return res.json()}).
then(data => { console.log(data); return setfatdata(data)});
}, []);



   const getFinalData = (data) => {
     {
       const fat  = [data,...dummydata]
       setfatdata(fat);
     }
    }
   
  return (<>
          <NavBar></NavBar>
       <NewCustomer addDataApp={getFinalData}></NewCustomer>
         <Customer details ={fat}></Customer>
        
      </>
      

  )
  
  }