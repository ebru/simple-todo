import todoActionTypes from './todo.types';

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
      default:
        return state;
    }
};
  
export default todoReducer;