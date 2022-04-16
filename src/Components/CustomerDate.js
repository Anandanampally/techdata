import './CustomerDate.css'

function CustomerDate(props) {
  
    return (<div className='customer-date'>
        <div className='customer-date__month'> {props.month} </div>
        <div className='customer-date__year'> {props.year}  </div>
        <div className='customer-date__day'> {props.day} </div>
    </div>)
}

export default CustomerDate;