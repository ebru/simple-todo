import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

import todoActionTypes from './todo.types';

import {
    fetchItemsSuccess,
    fetchItemsFailure
} from './todo.actions';

let API_URL = 'http://localhost/api';

if (process.env.NODE_ENV === 'production') {
    API_URL = 'http://simple-todo.eu-west-1.elasticbeanstalk.com/api'
}

const getItems = () => {
    return axios.get(
        `${API_URL}/items`
    );
};

export function* fetchItemsAsync() {
    try {
        const { data } = yield call(getItems);

        yield put(fetchItemsSuccess(data));
    } catch (error) {
        yield put(fetchItemsFailure(error.message));
    }

}

export function* fetchItemsStart() {
    yield takeEvery(
        todoActionTypes.FETCH_ITEMS_START,
        fetchItemsAsync
    );
}