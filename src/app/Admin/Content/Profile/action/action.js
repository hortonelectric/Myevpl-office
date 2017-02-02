export const LIST_PROFILES			= 'LIST_PROFILES'
export const SELECT_PROFILE      	= 'SELECT_PROFILE'
export const ADD_PROFILE        	= 'ADD_PROFILE'
export const ADD_PROFILE_FORM_TYPE	= 'ADD_PROFILE_FORM_TYPE'

export const listProfiles = (data) => {
    return {
        type: LIST_PROFILES,
        data
    }
}

export const selectProfiles = (id) => {
    return {
        type: SELECT_PROFILE,
        id
    }
}

export const addProfile = (data) => {
    return {
        type: ADD_PROFILE,
        data
    }
}

export const changeAddProfileFormType = (data) => {
    return {
        type: ADD_PROFILE_FORM_TYPE,
        data
    }
}
