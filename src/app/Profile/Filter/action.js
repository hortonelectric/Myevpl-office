export const FILTER_PROFILE_TYPE 		= 'FILTER_PROFILE_TYPE'
export const INSERT_FILTER_CATERED_TO 	= 'INSERT_FILTER_CATERED_TO'
export const REMOVE_FILTER_CATERED_TO 	= 'REMOVE_FILTER_CATERED_TO'

export function changeFilterProfileType (data) {
  return {
    type: FILTER_PROFILE_TYPE,
    data
  }
}

export function insertFilterCateredTo (data) {
  return {
    type: INSERT_FILTER_CATERED_TO,
	  data
  }
}

export function removeFilterCateredTo (data) {
  return {
    type: REMOVE_FILTER_CATERED_TO,
	  data
  }
}
