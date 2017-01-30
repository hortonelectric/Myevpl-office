import * as ACTION from '../action/modalAction'

export const publicAddScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PUBLIC_ADD_SCREEN :
            return true
        case ACTION.HIDE_PUBLIC_ADD_SCREEN :
            return false
        default :
            return state
    }
}

export const publicDeleteScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PUBLIC_DELETE_SCREEN :
            return true
        case ACTION.HIDE_PUBLIC_DELETE_SCREEN :
            return false
        default :
            return state
    }
}

export const publicEditUserScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PUBLIC_EDIT_USER_SCREEN :
            return true
        case ACTION.HIDE_PUBLIC_EDIT_USER_SCREEN :
            return false
        default :
            return state
    }
}

export const publicEditAccountScreen = (state = false, action) => {
    switch (action.type) {
        case ACTION.SHOW_PUBLIC_EDIT_ACCOUNT_SCREEN :
            return true
        case ACTION.HIDE_PUBLIC_EDIT_ACCOUNT_SCREEN :
            return false
        default :
            return state
    }
}
