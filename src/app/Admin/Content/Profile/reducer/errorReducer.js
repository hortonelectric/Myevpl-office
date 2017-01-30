import * as ERROR_ACTION from '../action/errorAction'
import { ADD_PROFILE, SHOW_PROFILE, EDIT_PROFILE_USER, EDIT_PROFILE_ACCOUNT } from '../action/action'

export const addProfileError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.ADD_PROFILE_VALIDATE :
            return action.data
        case ADD_PROFILE :
            return {}
        default :
            return state
    }
}

export const editProfileUserError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.EDIT_PROFILE_USER_VALIDATE :
            return action.data
        case SHOW_PROFILE :
            return {}
        case EDIT_PcUBLIC_USER :
            return {}
        default :
            return state
    }
}

export const editProfileAccountError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.EDIT_PROFILE_ACCOUNT_VALIDATE :
            return action.data
        case SHOW_PROFILE :
            return {}
        case EDIT_PROFILE_ACCOUNT :
            return {}
        default :
            return state
    }
}
