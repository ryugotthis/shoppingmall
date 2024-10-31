import { createStore, applyMiddleware } from 'redux';

import { thunk } from 'redux-thunk';
// rootReducer는 임의로 붙여준 이름
import rootReducer from './reducer';
import productReducer from './reducer/productReducer';
import authenticateReducer from './reducer/authenticateReducer';
import { configureStore } from '@reduxjs/toolkit';

// 여러 reducer들 통합 안해도 됨
// thunk, applyMiddleware, composeWithDevTools 따로 설정 안해줘도 됨
// 모두 자동셋업 되어 있음

// let store = createStore(rootReducer, applyMiddleware(thunk));

let store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});
export default store;
