export const deleteItem = (items, itemToDeleteId) => {
    return items.filter(item => item._id !== itemToDeleteId);
};

export const addItem = (items, itemToAdd) => {
    return [...items, { ...itemToAdd }];
};