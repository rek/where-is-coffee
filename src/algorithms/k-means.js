// http://burakkanber.com/blog/machine-learning-k-means-clustering-in-javascript-part-1/

const kmeans = (state) => ({
	start: (data) => {
		console.log('starting: ' + state.name)
		console.log('with data:', data);
	}
})

const cluster = (name)  => {
	let state = {
		name,
		speed: 100,
		position: 0
	}

  return Object.assign(
        {},
        kmeans(state),
    )
}

const kmeansClustering = cluster('kmeans')

export default kmeansClustering
