import React from 'react';
import { connect } from 'react-redux';

import { deleteItemStartAsync, updateItemStartAsync } from './../../redux/todo/todo.actions';

import CustomButton from './../../components/CustomButton/CustomButton';

import './ItemCard.scss';

const ItemCard = props => {
    const {
        deleteItemStartAsync,
        updateItemStartAsync,
        item
    } = props;

    const { _id, title, completed } = item;

    const itemToUpdate = {
        ...item,
        completed: !completed
    };

    const completedStyle = {
        color: '#aaa',
        textDecoration: 'line-through'
    };

    return (
        <li className='item-card'>
            <CustomButton
                className='check-button'
                onClick={() => updateItemStartAsync(itemToUpdate)}
                icon={completed ? 'check' : null}
                shape='circle'
            />
            <div
                className='item-title'
                style={completed ? completedStyle : null}>
                {title}
            </div>
            <CustomButton
                className='delete-button'
                onClick={() => deleteItemStartAsync(_id)}
                icon='delete'
                shape='circle'
            />
        </li>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deleteItemStartAsync: _id => dispatch(deleteItemStartAsync(_id)),
        updateItemStartAsync: itemToUpdate => dispatch(updateItemStartAsync(itemToUpdate))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(ItemCard);