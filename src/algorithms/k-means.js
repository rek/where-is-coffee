// http://burakkanber.com/blog/machine-learning-k-means-clustering-in-javascript-part-1/

const barker = (state) => ({
	bark: () => console.log('Woof, I am ' + state.name)
})

const murderRobotDog = (name)  => {
	let state = {
		name,
		speed: 100,
		position: 0
	}

  return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}

const bruno =  murderRobotDog('bruno')

bruno.bark() // "Woof, I am Bruno"
