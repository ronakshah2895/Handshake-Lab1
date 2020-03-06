import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/authReducer';
import profileReducer from './store/reducers/profileReducer';
import studentsReducer from './store/reducers/studentsReducer';
import App from './App';

const rootReducer = combineReducers({
  authReducer, profileReducer, studentsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
