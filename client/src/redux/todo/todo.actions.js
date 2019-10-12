import axios from 'axios';

import todoActionTypes from './todo.types';

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
            const itemsResponse = await axios.get('http://localhost/api/items');
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

export const deleteItemStartAsync = (_id) => {
    return dispatch => {
        dispatch(deleteItemStart());

        const deleteItem = async () => {
            await axios.delete(`http://localhost/api/items/${_id}`);

            dispatch(deleteItemSuccess(_id));
        };

        try {
            deleteItem();
        } catch (error) {
            dispatch(deleteItemFailure(error.message));
        }
    };
};