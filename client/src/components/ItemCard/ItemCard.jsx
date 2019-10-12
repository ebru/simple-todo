import React from 'react';
import { connect } from 'react-redux';

import { deleteItemStartAsync } from './../../redux/todo/todo.actions';

import CustomButton from './../../components/CustomButton/CustomButton';

import './ItemCard.scss';

const ItemCard = props => {
    const { deleteItemStartAsync, item: { _id, title } } = props;

    return (
        <li className='item-card'>
            <CustomButton
                className='check-button'
                icon='check'
                shape='circle'
                style={{ color: '#444', borderSize: '1px' }}
            />
            <div className='item-title'>
                {title}
            </div>
            <CustomButton
                className='delete-button'
                onClick={() => deleteItemStartAsync(_id)}
                icon='delete'
                shape='circle'
                style={{ color: '#aaa', fontSize: '17px', border: 'None' }}
            />
        </li>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deleteItemStartAsync: _id => dispatch(deleteItemStartAsync(_id))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(ItemCard);