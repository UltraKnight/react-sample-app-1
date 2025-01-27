import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';

interface LoginPayload {
  username: string;
  password: string;
}

// Simulate an API call for login (mocked)
function mockLoginApi(credentials: { username: string; password: string }) {
  return new Promise((resolve, reject) => {
    // Mocked login success/failure
    setTimeout(() => {
      if (credentials.username && credentials.password) {
        resolve('fake-token-123456');
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
}

function* handleLogin(action: { type: string; payload: LoginPayload }) {
  try {
    // Simulate an API call to the login endpoint
    const token: string = yield call(mockLoginApi, action.payload);
    // Dispatch a success action with the token
    yield put(loginSuccess(token));
    // Store the token in localStorage for persistence
    localStorage.setItem('token', token);
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message) || 'Login failed');
  }
}

// Watcher saga to listen for loginRequest actions
export function* watchAuth() {
  yield takeLatest(loginRequest.type, handleLogin);
}
