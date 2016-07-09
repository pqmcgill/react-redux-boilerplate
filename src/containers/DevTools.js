import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor'
import Inspector from 'redux-devtools-inspector';
import Dispatch from 'redux-devtools-dispatch';
import DiffMonitor from 'redux-devtools-diff-monitor';

export default createDevTools(
	<DockMonitor 
		toggleVisibilityKey='ctrl-h'
		changePositionKey='ctrl-q'
		changeMonitorKey='ctrl-m'
	>
		<LogMonitor />
		<SliderMonitor />
		<ChartMonitor />
		<Inspector />
		<Dispatch />
		<DiffMonitor />
	</DockMonitor>
);
