import data from './data/data'
import kmeans from './algorithims/k-means'

console.log('data', data);
console.log('kmeans', kmeans);

export default () =>
	<div>
		<h1>Which food is good?</h1>

		<canvas
			width='500'
			height='500'
		/>
	</div>
