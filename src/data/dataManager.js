import staticData from './static'
import placesData from './placesData'

// get visited data from somewhere????
const visited = []

const fetchData = {
	fetch() {
		// console.log('this should reutrn a probmise that gets our data', staticData);

		const updatedData = placesData.results.map((place) => {
			const {lat, lng} = place.geometry.location
			const beenHere = visited.find(i => i.location === `${lat},${lng}`)

			if (beenHere) {
				place.visited = beenHere
			} else {
				place.visited = false
			}

			return place
		})

		return Promise.resolve(updatedData)
	},

}

export default fetchData
