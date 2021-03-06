import todoActionTypes from './todo.types';

import { deleteItem, addItem, updateItem } from './todo.utils';

const INITIAL_STATE = {
  items: [],
  errorMessage: undefined
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.FETCH_ITEMS_START:
      return {
        ...state
      };
    case todoActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case todoActionTypes.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case todoActionTypes.DELETE_ITEM_START:
      return {
        ...state
      };
    case todoActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: deleteItem(state.items, action.payload)
      };
    case todoActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case todoActionTypes.ADD_ITEM_START:
      return {
        ...state
      };
    case todoActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: addItem(state.items, action.payload)
      };
    case todoActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case todoActionTypes.UPDATE_ITEM_START:
      return {
        ...state
      };
    case todoActionTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: updateItem(state.items, action.payload)
      };
    case todoActionTypes.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;