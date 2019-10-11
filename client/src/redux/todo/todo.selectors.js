import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectItems = createSelector(
    [selectTodo],
    todo => todo.items
);