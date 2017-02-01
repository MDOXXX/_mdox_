import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import {createHistory} from 'history';

import App from './App';

const history = createHistory();

ReactDOM.render(
	<App history={history} />,
	document.getElementById('root')
);
