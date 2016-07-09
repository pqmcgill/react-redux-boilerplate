import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementBy, decrementBy } from '../actions/CounterActions';

import Counter from '../components/Counter';

class TestApp extends Component {

	increment = () => {
		this.props.incrementBy(1);
	}

	decrement = () => {
		this.props.decrementBy(1);
	}

	render () {
		console.log(this.props);
		return (
			<div>
				<h1>Welcome to the React/Redux boilerplate!</h1>
				<Counter 
					count={ this.props.count } 
					handleIncrement={ this.increment }
					handleDecrement={ this.decrement }
				/>

			</div>
		);
	}
}

const mapState = state => {
	return {
		count: state.counter
	};
};

// Could also be the following due to same method signatures
// const mapDispatch = {
// 	incrementby,
// 	decrementBy
// };

const mapDispatch = dispatch => {
	return { 
		incrementBy (val) {
			dispatch(incrementBy(val));
		},
		decrementBy (val) {
			dispatch(decrementBy(val));
		}
	};
};

export default connect(mapState, mapDispatch)(TestApp);
