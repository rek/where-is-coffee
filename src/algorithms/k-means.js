// http://burakkanber.com/blog/machine-learning-k-means-clustering-in-javascript-part-1/
// https://github.com/mljs/kmeans
// http://mlweb.loria.fr/demos/mljs-tutorial-clustering.html
import ML from 'ml'

const kmeans = (state) => ({
	start: (data) => {
		console.log('state', state);
		console.log('with data:', data);

		// console.log('ML', ML);

		const scale = 500

		// [price, quantity, quality]
		let tempdata = [[1, 1, 1], [1, 2, 1], [-1, -1, -1], [-1, -1, -1.5]];
		let centers = [[1, 2, 1], [-1, -1, -1]];

		state.results = ML.Clust.kmeans(tempdata, 2, {initialization: centers});
		console.log('state.results', state.results);

		return state.results
	},

	draw() {
	    const context = state.canvas.getContext('2d');
	    console.log('context', context);

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
			200,
			40,
        //     (point[0] - dataExtremes[0].min + 1) * (width / (dataRange[0] + 2) ),
        //     (point[1] - dataExtremes[1].min + 1) * (height / (dataRange[1] + 2) )
        );
        context.lineTo(
           300,
           60,
        //     (mean[0] - dataExtremes[0].min + 1) * (width / (dataRange[0] + 2) ),
        //     (mean[1] - dataExtremes[1].min + 1) * (height / (dataRange[1] + 2) )
        );

        context.stroke();
        context.closePath();

        context.restore();


        drawPoint(100, 20, context)

	},
})

function drawPoint(x, y, canvas){
	canvas.fillRect(x, y, 10, 10)
}

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
