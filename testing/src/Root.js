import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// wrapped provider setup in a stateless component for easier testing
export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        // initialState allows an optional initial state, IE: For testing    
        <Provider store={store}>
            {children}
        </Provider>
    );
};