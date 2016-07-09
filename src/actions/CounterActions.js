import * as types from '../constants/ActionTypes';

export const incrementBy = (val) => {
	return {
		type: types.INCREMENT,
		val
	};
}

export const decrementBy = (val) => {
	return {
		type: types.DECREMENT,
		val
	};
}
