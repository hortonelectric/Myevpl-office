import * as ACTION from './action'

export const isAllowedOutside = (state = 'All', action) => {
	switch (action.type) {
		case ACTION.FILTER_IS_ALLOWED_OUTSIDE :
			return action.data

		default:
			return state
	}
}

export const isProvideOutside = (state = 'All', action) => {
	switch (action.type) {
		case ACTION.FILTER_IS_PROVIDE_OUTSIDE :
			return action.data

		default:
			return state
	}
}

export const venueType = (state = ['All'], action) => {
	switch (action.type) {
		case ACTION.INSERT_FILTER_VENUE_TYPE :
			return [ ...state, action.data ]

		case ACTION.REMOVE_FILTER_VENUE_TYPE:
			return state.filter(item => item !== action.data)

		default:
			return state
	}
}
