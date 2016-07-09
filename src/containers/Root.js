import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import TestApp from './TestApp';

export default class Root extends Component {
  render() {
		const { store } = this.props;
    return (
			<Provider store={ store }>
				<div>
					<TestApp />
					<DevTools />
				</div>
			</Provider>
    );
  }
}
