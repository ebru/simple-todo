import React from 'react';

import ItemCard from './../ItemCard/ItemCard';

import './ItemsList.scss';

const ItemsList = ({ items }) => {
    return (
        <div className='items-list-container'>
            <ul className='items-list'>
                {items
                    .map(item => (
                        <ItemCard key={item._id} item={item} />
                    ))}
            </ul>
        </div>
    )
};

export default ItemsList;