
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';

import './Expenses.css';


function Expenses(props) {

    return (
        <Card className="expenses">

            <ExpenseItem
                expenseDate={props.items[0].date}
                expenseTitle={props.items[0].title}
                expenseAmount={props.items[0].amount}
            />

            <ExpenseItem
                expenseDate={props.items[0].date}
                expenseTitle={props.items[0].title}
                expenseAmount={props.items[0].amount}
            />

        </Card>


    );
}

export default Expenses;