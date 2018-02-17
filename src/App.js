import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import KMeans from './working/k-means'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Where is COFFEE?!</h1>
				</header>
				<KMeans />
			</div>
		);
	}
}

export default App;
