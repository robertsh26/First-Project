import React, { useState } from 'react'
import './ToDoForm.css';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Add a new to-do'
            />
            <h2>Lots of Stuff to do</h2>
        </form>
    )
}

export default TodoForm;