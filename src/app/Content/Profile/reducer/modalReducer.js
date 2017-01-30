import * as ACTION from '../action/modalAction'

export const profileAddScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PROFILE_ADD_SCREEN :
            return true
        case ACTION.HIDE_PROFILE_ADD_SCREEN :
            return false
        default :
            return state
    }
}

export const profileDeleteScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PROFILE_DELETE_SCREEN :
            return true
        case ACTION.HIDE_PROFILE_DELETE_SCREEN :
            return false
        default :
            return state
    }
}

export const profileEditUserScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PROFILE_EDIT_USER_SCREEN :
            return true
        case ACTION.HIDE_PROFILE_EDIT_USER_SCREEN :
            return false
        default :
            return state
    }
}

export const profileEditAccountScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PROFILE_EDIT_ACCOUNT_SCREEN :
            return true
        case ACTION.HIDE_PROFILE_EDIT_ACCOUNT_SCREEN :
            return false
        default :
            return state
    }
}
