

function ExpenseDate(props) {

    const year = props.expenseDate.toLocaleString('en-GB', {year: "numeric"});
    const month =  props.expenseDate.toLocaleString('en-GB', {month: "long"}); 
    const day =  props.expenseDate.toLocaleString('en-GB', {day: "numeric"});
 
     return (
        
            <div>
             <div>{year}</div>
             <div>{month}</div>
             <div>{day}</div>
             
             </div>
            
     );
 }
 
 export default ExpenseDate;