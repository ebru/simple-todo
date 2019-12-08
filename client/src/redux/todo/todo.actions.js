import axios from 'axios';

import todoActionTypes from './todo.types';

let API_URL = 'dummy';

// Fetch items
export const fetchItemsStart = () => ({
    type: todoActionTypes.FETCH_ITEMS_START
});

export const fetchItemsSuccess = items => ({
    type: todoActionTypes.FETCH_ITEMS_SUCCESS,
    payload: items
});

export const fetchItemsFailure = errorMessage => ({
    type: todoActionTypes.FETCH_ITEMS_FAILURE,
    payload: errorMessage
});

export const fetchItemsStartAsync = () => {
    return dispatch => {
        dispatch(fetchItemsStart());

        const fetchItems = async () => {
            const itemsResponse = await axios.get(
                `${API_URL}/items`
            );

            const items = itemsResponse.data;

            dispatch(fetchItemsSuccess(items));
        };

        try {
            fetchItems();
        } catch (error) {
            dispatch(fetchItemsFailure(error.message));
        }
    };
};

// Delete item
export const deleteItemStart = () => ({
    type: todoActionTypes.DELETE_ITEM_START
});

export const deleteItemSuccess = deletedItemId => ({
    type: todoActionTypes.DELETE_ITEM_SUCCESS,
    payload: deletedItemId
});

export const deleteItemFailure = errorMessage => ({
    type: todoActionTypes.DELETE_ITEM_FAILURE,
    payload: errorMessage
});

export const deleteItemStartAsync = _id => {
    return dispatch => {
        dispatch(deleteItemStart());

        const deleteItem = async () => {
            await axios.delete(
                `${API_URL}/items/${_id}`
            );

            dispatch(deleteItemSuccess(_id));
        };

        try {
            deleteItem();
        } catch (error) {
            dispatch(deleteItemFailure(error.message));
        }
    };
};

// Add item
export const addItemStart = () => ({
    type: todoActionTypes.ADD_ITEM_START
});

export const addItemSuccess = addedItem => ({
    type: todoActionTypes.ADD_ITEM_SUCCESS,
    payload: addedItem
});

export const addItemFailure = errorMessage => ({
    type: todoActionTypes.ADD_ITEM_FAILURE,
    payload: errorMessage
});

export const addItemStartAsync = item => {
    return dispatch => {
        dispatch(addItemStart());

        const addItem = async () => {
            const addItemResponse = await axios({
                method: 'post',
                url: `${API_URL}/items`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: item
            });

            const addedItem = addItemResponse.data.item;

            dispatch(addItemSuccess(addedItem));
        };

        try {
            addItem();
        } catch (error) {
            dispatch(addItemFailure(error.message));
        }
    };
};

// Update item
export const updateItemStart = () => ({
    type: todoActionTypes.UPDATE_ITEM_START
});

export const updateItemSuccess = updatedItem => ({
    type: todoActionTypes.UPDATE_ITEM_SUCCESS,
    payload: updatedItem
});

export const updateItemFailure = errorMessage => ({
    type: todoActionTypes.UPDATE_ITEM_FAILURE,
    payload: errorMessage
});

export const updateItemStartAsync = item => {
    return dispatch => {
        dispatch(updateItemStart());

        const updateItem = async () => {
            const { _id, title, completed } = item;

            const itemToUpdate = {
                title: title,
                completed: completed
            };

            const updateItemResponse = await axios({
                method: 'put',
                url: `${API_URL}/items/${_id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: itemToUpdate
            });

            const updatedItem = updateItemResponse.data.item;

            dispatch(updateItemSuccess(updatedItem));
        };

        try {
            updateItem();
        } catch (error) {
            dispatch(updateItemFailure(error.message));
        }
    };
};