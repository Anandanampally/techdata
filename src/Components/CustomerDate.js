import './CustomerDate.css'

function CustomerDate(props) {
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const year = props.date.getFullYear();

 //   moment(date).format('dddd MMMM D Y')
    return (<div className='customer-date'>
        <div className='customer-date__month'> {props.month} </div>
        <div className='customer-date__year'> {props.year}  </div>
        <div className='customer-date__day'> {props.day} </div>
    </div>)
}

export default CustomerDate;