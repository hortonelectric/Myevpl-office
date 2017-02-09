import _ from 'lodash'

const checkIfAllFilter = filter => filter === "All" ? true : false
const checkIfAllFilterInArray = data => data.find( item => item === "All" ) ? true : false

const filterVenueType = (list, filterData) => {
	return checkIfAllFilterInArray(filterData) ? 
		list : 
		_.filter(list, data => {
			return _.find(data.cateredTo, ( cateredToItem, key ) => {
				if(cateredToItem){
					return _.find(filterData, filterItem => {
						return filterItem == key
					}) 
				}else{
					return false	
				}
			})
		})
}

const filterIsProvideOutside = (list, filterData) => {
	checkIfAllFilter(filterData) ? list : _.filter(list, data => data.isProvideOutside === filterData)
}

const filterIsAllowedOutside = (list, filterData) => {
	checkIfAllFilter(filterData) ? list : _.filter(list, data => data.isAllowedOutside === filterData)
}

export default (list, filter) => {
	console.log(filter)
	console.log(list)
	return filterIsAllowedOutside(
		filterIsProvideOutside(
			list,
			filter.isProvideOutside
		),
		filter.isAllowedOutside
	)	
}
