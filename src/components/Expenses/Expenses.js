
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


const Expenses = (props)  => {

const [filteredYear, setFilteredYear] = useState('2023');

const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
};


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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