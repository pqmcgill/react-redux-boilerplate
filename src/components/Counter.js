import React from 'react';

const Counter = ( props ) => {
	return (
		<div>
			<span id="counter">{ props.count }</span>
			<button onClick={ props.handleDecrement }>-</button>
			<button onClick={ props.handleIncrement }>+</button>
		</div>
	);
};

Counter.propTypes = {
	count: React.PropTypes.number.isRequired,
	handleIncrement: React.PropTypes.func,
	handleDecrement: React.PropTypes.func
};

export default Counter;
