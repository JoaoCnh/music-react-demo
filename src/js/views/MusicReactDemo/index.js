import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from 'components/shared/Menu';
// import Page from 'app/views/BeerTracker/Page';

export default class Arkade extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="music-react-demo">
					<Menu />
				</div>
			</BrowserRouter>
		);
	}
}