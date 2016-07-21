import {
  combineReducers
} from 'redux';
import name from './listData';
import list from './list';

import { routeReducer } from 'redux-simple-router';

const data = {
    name,
    data:list
};

const rootReducer = combineReducers(Object.assign({}, data, {
  routing: routeReducer
}));

export default rootReducer;
