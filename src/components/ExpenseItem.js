
import './ExpenseItem.css';

function ExpenseItem(props) {

   const year = props.expenseDate.toLocaleString('en-GB', {year: "numeric"});
   const month =  props.expenseDate.toLocaleString('en-GB', {month: "long"}); 
   const day =  props.expenseDate.toLocaleString('en-GB', {day: "numeric"});

    return (
        <div className="expense-item">
           <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
            
            </div>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
