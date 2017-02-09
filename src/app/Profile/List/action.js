export const LIST_PROFILES			= 'LIST_PROFILES'
export const SELECT_PROFILE      	= 'SELECT_PROFILE'

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


