import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import initialState from './initialState';

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
