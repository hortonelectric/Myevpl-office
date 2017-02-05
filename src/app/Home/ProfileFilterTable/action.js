export const FILTER_PROFILE_TYPE = 'FILTER_PROFILE_TYPE'
export const FILTER_CATERED_TO = 'FILTER_CATERED_TO'

export function changeFilterProfileType (data) {
  return {
    type: FILTER_PROFILE_TYPE,
    data
  }
}

export function changeFilterCateredTo (data) {
  return {
    type: FILTER_CATERED_TO,
	  data
  }
}
