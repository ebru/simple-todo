import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchItemsStart } from './../../redux/todo/todo.actions';
import { selectItems } from './../../redux/todo/todo.selectors';

import AddItemForm from './../AddItemForm/AddItemForm';
import ItemsList from './../ItemsList/ItemsList';

import './TodoList.scss';

const TodoList = props => {
    const { fetchItemsStart, items } = props;

    useEffect(() => {
        fetchItemsStart();
    }, [fetchItemsStart]);

    return (
        <div className='todo-list-container'>
            <AddItemForm />
            <ItemsList items={items} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    items: selectItems
});

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsStart: () => dispatch(fetchItemsStart())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
