import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import apiClient from '../lib/apiClient';

const localClient = new apiClient({
  host: 'localhost',
  port: 5000,
});

function* fetchTodosList(action) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      const todoslist = {};
      console.info('fetchTodosList: called : ', action);
      yield put({ type: 'TODOSLIST_FETCH_SUCCEEDED', todoslist });
   } catch (e) {
      yield put({ type: 'TODOSLIST_FETCH_FAILED', message: e.message});
   }
}

function* addTodoList(action) {
   try {
      console.info('addTodoList: called : ', action);
      const apiResponse = yield call(localClient.post, '/todolists', { title: action.payload.title });
      console.info('apiResponse: ', apiResponse);
      yield put({ type: action.payload.type, ...apiResponse.data });
   } catch (e) {
     console.error(e);
      yield put({ type: 'TODOSLIST_ADD_FAILED', message: e.message});
   }
}



function* mySaga() {
  yield takeEvery('TODOSLIST_FETCH_REQUESTED', fetchTodosList);
  yield takeEvery('TODOSLIST_ADD_REQUESTED', addTodoList);
}


export default mySaga;
