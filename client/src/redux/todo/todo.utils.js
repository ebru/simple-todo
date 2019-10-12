export const deleteItem = (items, itemToDeleteId) => {
    return items.filter(item => item._id !== itemToDeleteId);
};