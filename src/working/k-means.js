import React from 'react';

import dataManager from '../data/dataManager'
import kmeans from '../algorithms/k-means'

// console.log('dataManager', dataManager);
// console.log('kmeans', kmeans);

class KMeans extends React.Component {
	componentDidMount() {
		dataManager.fetch().then((data) => {
			// console.log('Found data:', data);

			kmeans.start(data)
		})
	}

	render() {
		return (
			<div>
				<h1>have a start button here</h1>

				<canvas
					width='500'
					height='500'
				/>
			</div>

		)
	}
}

export default KMeans
