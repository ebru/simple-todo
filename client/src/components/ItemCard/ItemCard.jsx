import React from 'react';

import './ItemCard.scss';

const ItemCard = ({ itemTitle }) => (
    <li className='item-card'>{itemTitle}</li>
);

export default ItemCard;