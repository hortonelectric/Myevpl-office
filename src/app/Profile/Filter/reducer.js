import * as ACTION from './action'

export const profileType = (state = 'All', action) => {
  switch (action.type) {
    case ACTION.FILTER_PROFILE_TYPE :
      return action.data

    default:
      return state
  }
}

export const cateredTo = (state = ['All'], action) => {
  switch (action.type) {
    case ACTION.INSERT_FILTER_CATERED_TO :
      return [ ...state, action.data ]

    case ACTION.REMOVE_FILTER_CATERED_TO:
      return state.filter(item => item !== action.data)

	default:
		return state
  }
}
