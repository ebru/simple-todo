import React from 'react';

import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import TodoList from './../../components/TodoList/TodoList';

import './Homepage.scss';

const Homepage = () => (
    <div className='homepage-container'>
        <Header />
        <TodoList />
        <Footer />
    </div>
);

export default Homepage;