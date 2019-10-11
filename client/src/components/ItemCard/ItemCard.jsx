import React from 'react';

import CustomButton from './../../components/CustomButton/CustomButton';

import './ItemCard.scss';

const ItemCard = ({ itemTitle }) => (
    <li className='item-card'>
        <div className='item-title'>{itemTitle}</div>
        <div className='item-icons'>
            <CustomButton
                className='check-button'
                icon='check'
                size='large'
                shape='circle'
                style={{ color: '#444', fontSize: '24px', border: 'None' }}
            />
            <CustomButton
                className='delete-button'
                icon='delete'
                shape='circle'
                style={{ color: '#aaa', fontSize: '17px', border: 'None' }}
            />
        </div>
    </li>
);

export default ItemCard;