export const ADD_PROFILE        			= 'ADD_PROFILE'
export const ADD_PROFILE_FORM_TYPE			= 'ADD_PROFILE_FORM_TYPE'
export const ADD_PROFILE_PAGE				= 'ADD_PROFILE_PAGE'
export const ADD_PROFILE_VENUES_EVENT_AREAS	= 'ADD_PROFILE_VENUES_EVENT_AREAS'

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

export const changeAddProfilePage =  (data) => {
    return {
        type: ADD_PROFILE_PAGE,
        data
    }
}

export const changeAddProfileVenueEventAreas =  (data) => {
    return {
        type: ADD_PROFILE_VENUES_EVENT_AREAS,
        data
    }
}
