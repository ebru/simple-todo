import React from 'react';

import './ItemsList.scss';

const ItemsList = ({ items }) => (
    <div className='items-list-container'>
        <ul>
            {items
                .map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
        </ul>
    </div>
);

export default ItemsList;