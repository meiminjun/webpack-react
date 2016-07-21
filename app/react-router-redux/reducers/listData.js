import {
	SHOW_DATA
} from '../actions/listData';

const initialState = "测试电脑";


export default function name(state = initialState, action) {
	switch (action.type) {
		case SHOW_DATA:
			return "测试";
		default:
               return "测试2";
	}
}
