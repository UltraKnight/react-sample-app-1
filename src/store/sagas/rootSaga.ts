import { all } from 'redux-saga/effects';
import { watchAuth } from './authSaga';

// Combine all sagas in a root saga
export default function* rootSaga() {
  yield all([watchAuth()]);
}
