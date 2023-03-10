
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    });

    return (
        <Card className="expenses">
            {/* Example of controlled component (two-way binding) */}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} />


            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expenseDate={expense.date}
                    expenseTitle={expense.title}
                    expenseAmount={expense.amount}
                />

            )

            )}





        </Card>


    );
}

export default Expenses;