import {
	SHOW_DATA
} from '../actions/listData';

export default function name(state = '测试', action) {
  console.log(SHOW_DATA);
	switch (action.type) {
		case SHOW_DATA:
			return state;
		default:
               return state;
	}
}