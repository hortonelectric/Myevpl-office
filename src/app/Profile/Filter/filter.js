import _ from 'lodash'
import venueFilter from './Venue/filter'

const checkIfAllFilter = filter => filter === "All" ? true : false
const checkIfAllFilterInArray = data => data.find( item => item === "All" ) ? true : false

const filterCateredTo = (list, filterData) => {
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

const filterProfileType = (list, filterData) => {
	return checkIfAllFilter(filterData) ? list : _.filter(list, data => data.type === filterData)
}

export default (list, filter) => {

	const basicFiltered = filterProfileType(
		filterCateredTo(list, filter.cateredTo), 
		filter.profileType
	)		

	if(filter.profileType === "Venue" ){
		return basicFiltered
	}

	if(filter.profileType === "All" ){
		return basicFiltered
	}

}
