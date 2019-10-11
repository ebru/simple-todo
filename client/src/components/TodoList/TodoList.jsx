import React from 'react';

import AddItemForm from './../AddItemForm/AddItemForm';

import './TodoList.scss';

const TodoList = () => {
    return (
        <div className='todo-list-container'>
            <AddItemForm />
            <div className='items'>
                {/* <h2>items</h2> */}
            </div>
        </div>
    )
};

export default TodoList;