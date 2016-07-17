import {
  combineReducers
} from 'redux';
import listData from './listData';
import list from './list';
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  listData,
  data:list
});

export default rootReducer;