import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

import './ExpenseItem.css';

//Example of Stateless, presentational o dum component . 
//No use of useState on it (Stateful or start components)

const ExpenseItem = (props) => {

   return (
        <li>
        <Card className="expense-item">     
            <ExpenseDate expenseDate={props.expenseDate} />       
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
           
        </Card>
        </li>
    );
}

export default ExpenseItem;
