import {
	each,
	times,
	unzip,
} from 'lodash'

import normalize from 'array-normalize'

export const normalizeArray = (data) => {
	// console.log('data', data);
	// fields we will be normalizing
	const fields = []
	const normalizedFields = []

	// find size of each data element
	const amountOfFields = data[0].length

	// console.log('amountOfFields', amountOfFields);

	// make the result set have the right amount of fields
	times(amountOfFields, () => fields.push([]))

	// console.log('fields', fields);

	// separate the data into its own arrays so we can normalize
	each(data, (item) => {
		// console.log('item', item);
		times(amountOfFields, (index) => {
			// console.log('item[index]', item[index]);
			fields[index].push(item[index])
		})
	})

	// normalize each data field
	times(amountOfFields, (index) => {
		normalizedFields[index] = normalize(fields[index])
	})

	// mix the results back together
	return unzip(normalizedFields)
}

