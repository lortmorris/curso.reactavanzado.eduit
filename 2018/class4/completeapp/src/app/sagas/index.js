import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiClient from "../apiClient";

const client = new apiClient("http://localhost:8080");

function* fetchRemoveTodolist(action) {
   try {
      const todolist = yield call(client.get('todolist'), action.payload.id);
      yield put({type: "REMOVE_TODOLIST_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "REMOVE_TODOLIST_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("REMOVE_TODOLIST_REQUESTED", fetchRemoveTodolist);
}


export default mySaga;
