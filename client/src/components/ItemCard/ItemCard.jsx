import React from 'react';

import CustomButton from './../../components/CustomButton/CustomButton';

import './ItemCard.scss';

const ItemCard = ({ itemTitle }) => (
    <li className='item-card'>
        <CustomButton
            className='check-button'
            icon='check'
            shape='circle'
            style={{ color: '#444', borderSize: '1px'}}
        />
        <div className='item-title'>
            {itemTitle}
        </div>
        <CustomButton
            className='delete-button'
            icon='delete'
            shape='circle'
            style={{ color: '#aaa', fontSize: '17px', border: 'None' }}
        />
    </li>
);

export default ItemCard;