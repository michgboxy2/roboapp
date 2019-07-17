import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {searchRobot, requestRobots} from './reducers';

const logger = createLogger();


//combine all reducers to a root and use the root in a store
const rootReducer = combineReducers({searchRobot, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
<App/> 
</Provider>, 

document.getElementById('root'));
registerServiceWorker();
