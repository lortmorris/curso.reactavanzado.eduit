import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import apiClient from '../libs/apiClient';

function* fetchTodosList(action) {
   try {
      const response = yield call(apiClient.getTodosList);
      yield put({ type: 'TODOSLIST_FETCH_SUCCEEDED', todoslist: response.data.docs });
   } catch (e) {
      yield put({ type: 'TODOSLIST_FETCH_FAILED', message: e.message});
   }
}

function* addTodoList(action) {
   try {
     console.info('addTodoList: ', action);
      const todoslist = action.payload;
      yield call(apiClient.addTodosList, { title: todoslist.title  });
      yield put({ type: action.payload.type, title: todoslist.title });
   } catch (e) {
      yield put({ type: 'TODOSLIST_ADD_FAILED', message: e.message});
   }
}

function* initAppState(action) {
  try {
    console.info('initAppState saga called: ', action);
    yield put({ type: 'TODOSLIST_FETCH_REQUESTED' });
  } catch (e) {
    console.error('Error initialState: ', e);
  }
}

function* mySaga() {
  yield takeEvery('TODOSLIST_FETCH_REQUESTED', fetchTodosList);
  yield takeEvery('TODOSLIST_ADD_REQUESTED', addTodoList);
  yield takeLatest('INIT_APP_STATE', initAppState);
}


export default mySaga;
