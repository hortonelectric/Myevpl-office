export const ADD_PROFILE        	= 'ADD_PROFILE'
export const ADD_PROFILE_FORM_TYPE	= 'ADD_PROFILE_FORM_TYPE'
export const ADD_PROFILE_PAGE		= 'ADD_PROFILE_PAGE'

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
