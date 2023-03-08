

import './ExpenseDate.css';

function ExpenseDate(props) {

    const year = props.expenseDate.toLocaleString('en-GB', {year: "numeric"});
    const month =  props.expenseDate.toLocaleString('en-GB', {month: "long"}); 
    const day =  props.expenseDate.toLocaleString('en-GB', {day: "numeric"});
 
     return (
        
            <div className="expense-date">
             <div className ="expense-date__year">{year}</div>
             <div className ="expense-date__month">{month}</div>
             <div className ="expense-date__day">{day}</div>     
             </div>
            
     );
 }
 
 export default ExpenseDate;