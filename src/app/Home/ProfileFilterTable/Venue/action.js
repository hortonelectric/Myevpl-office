export const FILTER_IS_ALLOWED_OUTSIDE 		= 'FILTER_IS_ALLOWED_OUTSIDE'
export const FILTER_IS_PROVIDE_OUTSIDE 		= 'FILTER_IS_PROVIDE_OUTSIDE'
export const INSERT_FILTER_VENUE_TYPE 		= 'INSERT_FILTER_VENUE_TYPE'
export const REMOVE_FILTER_VENUE_TYPE 		= 'REMOVE_FILTER_VENUE_TYPE'

export function changeFilterisAllowedOutside (data) {
	return {
		type: FILTER_IS_ALLOWED_OUTSIDE,
		data
	}
}

export function changeFilterisProvideOutside (data) {
	return {
		type: FILTER_IS_PROVIDE_OUTSIDE,
		data
	}
}


export function insertFilterVeneuType (data) {
	return {
		type: INSERT_FILTER_VENUE_TYPE,
		data
	}
}

export function removeFilterVeneuType (data) {
	return {
		type: REMOVE_FILTER_VENUE_TYPE,
		data
	}
}
