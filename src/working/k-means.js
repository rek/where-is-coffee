import React from 'react';

import dataManager from '../data/dataManager'
import kmeansClusterer from '../algorithms/k-means'
import './k-means.styles.css'
// console.log('dataManager', dataManager);
// console.log('kmeans', kmeans);
import Surface from '../libs/3dCanvas'

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

		const surface = new Surface(); 	// A set of points (in vector format) representing the surface.
		surface.generate(); 			// Creates the set of points reprsenting the surface. Must be called before color().
		surface.color(); 				// Based on the min and max z-coordinate values, chooses colors for each point based on the point's z-ccordinate value (i.e., height).
		surface.setup(); 				// Create and append the canvas element to the DOM.
		surface.draw(surface); 			// Draw the surface on the canvas.
		surface.watch(surface); 		// Add key listners
	}

	render() {
		const {loading} = this.state

		return (
			<div>
				<h1>Results:</h1>

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
