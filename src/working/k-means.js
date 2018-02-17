import React from 'react';

import dataManager from '../data/dataManager'
import kmeansClusterer from '../algorithms/k-means'
import './k-means.styles.css'
// console.log('dataManager', dataManager);
// console.log('kmeans', kmeans);

class KMeans extends React.Component {
	componentDidMount() {
		dataManager.fetch().then((data) => {
			// console.log('Found data:', data);

			const kmeans = kmeansClusterer(this.canvas)
			kmeans.start(data)
		})
	}

	render() {
		return (
			<div>
				<h1>we should have a start button here</h1>

				<canvas
					ref={(el) => this.canvas = el}
					width='500'
					height='500'
				/>
			</div>

		)
	}
}

export default KMeans
