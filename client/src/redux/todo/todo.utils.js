export const deleteItem = (items, itemToDeleteId) => {
    return items.filter(item => item._id !== itemToDeleteId);
};

export const addItem = (items, itemToAdd) => {
    return [...items, { ...itemToAdd }];
};

export const updateItem = (items, updatedItem) => {
    const { _id } = updatedItem;

    const updatedItems = items.map(item =>
        item._id === _id
            ? item = updatedItem
            : item
    );

    return updatedItems;
};