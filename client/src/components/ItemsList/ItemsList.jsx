import React from 'react';

import ItemCard from './../ItemCard/ItemCard';

import './ItemsList.scss';

const ItemsList = ({ items }) => (
    <div className='items-list-container'>
        <ul className='items-list'>
            {items
                .map(item => (
                    <ItemCard key={item.id} itemTitle={item.title} />
                ))}
        </ul>
    </div>
);

export default ItemsList;