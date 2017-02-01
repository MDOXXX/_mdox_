import React, {Component} from 'react';

import _mdox_ from '../_mdox_';
_mdox_.log('It does not work!!!');

class MdoxApp extends Component {
	render() {
		return (
			<div id="mdox-container">
				<h1>{_mdox_.yeahString('_mdox_ JS rulez!')}</h1>
			</div>
		);
	}
}

export default MdoxApp;
