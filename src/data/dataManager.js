import staticData from './static'

const fetchData = {
	fetch() {
		// console.log('this should reutrn a probmise that gets our data', staticData);

		return Promise.resolve(staticData)
	},

}

export default fetchData
