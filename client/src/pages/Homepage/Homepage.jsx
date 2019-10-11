import React from 'react';

import Header from './../../components/Header/Header';
import TodoList from './../../components/TodoList/TodoList';

import './Homepage.scss';

const Homepage = () => (
    <div className='homepage-container'>
        <Header />
        <TodoList />
    </div>
);

export default Homepage;