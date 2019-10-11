import React from 'react';

import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

const Homepage = () => (
    <div className='homepage-container'>
        <Header />
        <TodoList />
    </div>
);

export default Homepage;