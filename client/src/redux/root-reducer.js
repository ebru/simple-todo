import { combineReducers } from 'redux';

import todoReducer from './todo/todo.reducer';

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;