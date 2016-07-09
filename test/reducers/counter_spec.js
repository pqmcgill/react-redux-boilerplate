import counter from '../../src/reducers/counter';
import * as types from '../../src/constants/ActionTypes';
import * as errors from '../../src/constants/Errors';
import * as chai from 'chai';

let should = chai.should();

describe('Reducer: counter', () => {

	describe('when state is undefined', () => {

		it('should return initial state of 0', () => {
			const prevState = undefined;
			const nextState = counter(prevState, { type: '@@INIT' });
			nextState.should.equal(0);
		});

	});

	describe('when action type is INCREMENT', () => {

		it('should increment the state by specified val', () => {
			const prevState = 4;
			const action = {
				type: types.INCREMENT,
				val: 1
			};
			const nextState = counter(prevState, action);
			nextState.should.equal(5);
		});

	});

	describe('when action type is DECREMENT', () => {

		it('should decrement the state by the specified val', () => {
			const prevState = 4;
			const action = {
				type: types.DECREMENT,
				val: 1
			};
			const nextState = counter(prevState, action);
			nextState.should.equal(3);
		});

	});

	describe('when action type is unknown', () => {

		it('should just return the state as is', () => {
			const prevState = 4;
			const action = {
				type: 'UNKNOWN_ACTION',
				val: 1
			};
			const nextState = counter(prevState, action);
			nextState.should.equal(prevState);
		});

	});

	describe('when action is missing type', () => {

		it('should throw the missing action type error', () => {
			const action = {
				val: 1
			};
			counter.bind(null, 4, action).should.throw(errors.MISSING_ACTION_TYPE);
		});
	
	});

	describe('when val is not a number', () => {

		it('should throw an error specifying an incorrect param', () => {
			const action = {
				type: types.INCREMENT,
				val: '4'
			};
			counter.bind(null, 4, action).should.throw(errors.INCORRECT_REDUCER_PARAM('number', typeof(action.val)));
		});
		
	});

});
