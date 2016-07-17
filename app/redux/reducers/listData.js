import {
	SHOW_DATA
} from '../actions/listData';

export default function name(state = 'hahah', action) {
    console.log(action.type);
	switch (action.type) {
		case SHOW_DATA:
			return state;
		default:
               return state;
	}
}