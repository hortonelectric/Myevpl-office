import * as ACTION from './action'

export const profileType = (state = 'All', action) => {
  switch (action.type) {
    case ACTION.FILTER_PROFILE_TYPE :
      return action.data

    default:
      return state
  }
}

export const cateredTo = (state = 'All', action) => {
  switch (action.type) {
    case ACTION.FILTER_CATERED_TO :
      return action.data

    default:
      return state
  }
}
