import React from 'react';

import dataManager from '../data/dataManager'
import kmeansClusterer from '../algorithms/k-means'
import './k-means.styles.css'
// console.log('dataManager', dataManager);
// console.log('kmeans', kmeans);

class KMeans extends React.Component {
	state = {
		loading: true
	}

	componentDidMount() {
		dataManager.fetch().then((data) => {
			// console.log('Found data:', data);

			const kmeans = kmeansClusterer(this.canvas)
			kmeans.start(data)
			kmeans.draw()

			this.setState({loading: false})
		})
	}

	render() {
		const {loading} = this.state

		return (
			<div>
				<h1>we should have a start button here</h1>

				{loading &&
					<div>
						Loading...
					</div>
				}

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
