import * as types from '../constants/ActionTypes';
import * as errors from '../constants/Errors';

export default (state = 0, action) => {
	if (!action.type)
		throw new Error(errors.MISSING_ACTION_TYPE);

	if (action.val && typeof(action.val) !== 'number')
		throw new Error(errors.INCORRECT_REDUCER_PARAM('number', typeof(action.val)));

	switch (action.type) {
		case types.INCREMENT:
			return state + action.val;
		case types.DECREMENT:
			return state - action.val;
		default:
			return state;
	}
}
