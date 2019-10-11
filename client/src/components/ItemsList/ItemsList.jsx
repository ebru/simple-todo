import React from 'react';

import ItemCard from './../ItemCard/ItemCard';

import './ItemsList.scss';

const ItemsList = ({ items }) => {
    const itemsLatestFirst = items.reverse();

    return (
        <div className='items-list-container'>
            <ul className='items-list'>
                {itemsLatestFirst
                    .map(item => (
                        <ItemCard key={item._id} itemTitle={item.title} />
                    ))}
            </ul>
        </div>
    )
};

export default ItemsList;