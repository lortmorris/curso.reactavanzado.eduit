import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


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
      // const user = yield call(Api.fetchUser, action.payload.userId);
      const todoslist = action.payload;
      console.info('addTodoList: called : ', action);
      yield put({ type: action.payload.type, title: todoslist.title });
   } catch (e) {
      yield put({ type: 'TODOSLIST_ADD_FAILED', message: e.message});
   }
}



function* mySaga() {
  yield takeEvery('TODOSLIST_FETCH_REQUESTED', fetchTodosList);
  yield takeEvery('TODOSLIST_ADD_REQUESTED', addTodoList);
}


export default mySaga;
