import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import Dairy from './dairy/dairy';
import Dialog, { dialogState } from './dialog/dialog';
import InputBox from './dialog/inputbox';

import styles from './main.scss';
import storageUtils from './utils/storage';

class Routes extends Component {

	constructor() {
		super();
		this.state = {
			entries: [...storageUtils.getEntries()]
		}
	}

	addEntry() {
		this.setState({
			entries: [...storageUtils.getEntries()]
		})
	}

	openInputBox() {
		dialogState.openDialog()
	}

	render() {
		return (
			<>
				<button className={styles['button']} onClick={this.openInputBox.bind(this)}>Add Entry</button>
				<Router>
					<Switch>
						<Route path="/:year?/:month?" component={(props) => <Dairy {...props} entries={this.state.entries} />} />
					</Switch>
				</Router>

				<Dialog>
					<InputBox addEntry={this.addEntry.bind(this)} />
				</Dialog>
			</>
		);
	}
}

export default Routes;