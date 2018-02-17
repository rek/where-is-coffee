// http://burakkanber.com/blog/machine-learning-k-means-clustering-in-javascript-part-1/

import ML from 'ml'

const kmeans = (state) => ({
	start: (data) => {
		console.log('starting: ' + state.name)
		console.log('with data:', data);

		console.log('ML', ML);

		let tempdata = [[1, 1, 1], [1, 2, 1], [-1, -1, -1], [-1, -1, -1.5]];
		let centers = [[1, 2, 1], [-1, -1, -1]];

		state.results = ML.Clust.kmeans(tempdata, 2, {initialization: centers});
		console.log('state.results', state.results);

		return state.results
	},

	draw() {
	    const context = state.canvas.getContext('2d');

	    const height = 500
	    const width = 500

		context.clearRect(0, 0, width, height);
		context.globalAlpha = 0.3;

		context.save();
        context.strokeStyle = 'blue';
        context.beginPath();

        console.log('centroids 1', state.results.centroids[0].centroid);
        console.log('centroids 2', state.results.centroids[1].centroid);

        const start = state.results.centroids[0].centroid[0]
        const end = state.results.centroids[0].centroid[1]
        context.moveTo(
			start,
			start,
        //     (point[0] - dataExtremes[0].min + 1) * (width / (dataRange[0] + 2) ),
        //     (point[1] - dataExtremes[1].min + 1) * (height / (dataRange[1] + 2) )
        );
        context.lineTo(
           end,
           end,
        //     (mean[0] - dataExtremes[0].min + 1) * (width / (dataRange[0] + 2) ),
        //     (mean[1] - dataExtremes[1].min + 1) * (height / (dataRange[1] + 2) )
        );

        context.stroke();
        context.closePath();

        context.restore();

        d(context, 0.1, 1.4)

	},
})

const d = (ctx, x, y) => {
	ctx.save();

	ctx.strokeStyle = '#333333';
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.arc(0, 0, 5, 0, Math.PI*2, true);
	ctx.stroke();
	ctx.closePath();

	ctx.restore();
}

const cluster = (canvas)  => {
	let state = {
		canvas,
		speed: 100,
		position: 0
	}

  return Object.assign(
        {},
        kmeans(state),
    )
}

export default cluster
