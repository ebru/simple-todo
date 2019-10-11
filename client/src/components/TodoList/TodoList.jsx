import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchItemsStartAsync } from './../../redux/todo/todo.actions';
import { selectItems } from './../../redux/todo/todo.selectors';

import AddItemForm from './../AddItemForm/AddItemForm';
import ItemsList from './../ItemsList/ItemsList';

import './TodoList.scss';

const TodoList = props => {
    const { fetchItemsStartAsync, items } = props;

    useEffect(() => {
        fetchItemsStartAsync();
    }, [fetchItemsStartAsync]);

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
        fetchItemsStartAsync: () => dispatch(fetchItemsStartAsync())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
