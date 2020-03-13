/* global describe, it */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Landing from './common/Landing/Landing';
import Login from './common/Login/Login';
import authReducer from './store/reducers/authReducer';
import Register from './common/Register/Register';

const rootReducer = combineReducers({
  authReducer,
});

const store = createStore(rootReducer);

describe('Landing React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Landing />);
  });
});

describe('Login React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><Login /></Provider>);
  });
});

describe('Register React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><Register /></Provider>);
  });
});
