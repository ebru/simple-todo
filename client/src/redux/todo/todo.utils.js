export const deleteItem = (items, itemToRemoveId) => {
    return items.filter(item => item._id !== itemToRemoveId);
};