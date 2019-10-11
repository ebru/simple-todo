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