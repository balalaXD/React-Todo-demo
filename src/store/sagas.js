import { takeEvery, put } from 'redux-saga/effects';
import ACTIONTYPES from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('http://localhost:3002/db')
    const action = initListAction(res.data.todoItems)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function* mySaga() {
  yield takeEvery(ACTIONTYPES.GET_INIT_LIST, getInitList)
}

export default mySaga;
