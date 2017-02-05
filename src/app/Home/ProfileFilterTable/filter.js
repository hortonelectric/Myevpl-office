import _ from 'lodash'

const checkIfAllFilter = filter => filter === "All" ? true : false

const filterProfileType = (list, filterData) => {
	return checkIfAllFilter(filterData) ? list : _.filter(list, data => data.type === filterData)
}

export default (list, filter) => {
	return filterProfileType(list, filter.profileType)			
}
