import * as ACTION from './action'

export const addProfileType = (state = 'Venue', action) => {

    switch (action.type) {
        case ACTION.ADD_PROFILE_FORM_TYPE :
            return action.data
        default :
            return state
    }

}

export const addProfilePage = (state = 'selectTypeForm', action) => {

    switch (action.type) {
        case ACTION.ADD_PROFILE_PAGE :
            return action.data
        default :
            return state
    }

}
