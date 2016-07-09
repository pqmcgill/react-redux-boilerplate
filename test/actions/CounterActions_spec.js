import * as chai from 'chai';
import * as types from '../../src/constants/ActionTypes';
import * as CounterActions from '../../src/actions/CounterActions';

let should = chai.should();

describe('Action: CounterActions', () => {

	describe('incrementBy', () => {

		const { incrementBy } = CounterActions;

		it('should return the correct increment action', () => {
			const expectedAction = {
				type: types.INCREMENT,
				val: 5
			};
			const actualAction = incrementBy(5);
			actualAction.should.eql(expectedAction);
		});
		
	});

	describe('decrementBy', () => {

		const { decrementBy } = CounterActions;

		it('should return the correct decrement action', () => {
			const expectedAction = {
				type: types.DECREMENT,
				val: 5
			};
			const actualAction = decrementBy(5);
			actualAction.should.eql(expectedAction);
		});
		
	});
	
});


