import * as ERROR_ACTION from '../action/errorAction'
import { ADD_PUBLIC, SHOW_PUBLIC, EDIT_PUBLIC_USER, EDIT_PUBLIC_ACCOUNT } from '../action/action'

export const addPublicError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.ADD_PUBLIC_VALIDATE :
            return action.data
        case ADD_PUBLIC :
            return {}
        default :
            return state
    }
}

export const editPublicUserError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.EDIT_PUBLIC_USER_VALIDATE :
            return action.data
        case SHOW_PUBLIC :
            return {}
        case EDIT_PcUBLIC_USER :
            return {}
        default :
            return state
    }
}

export const editPublicAccountError = (state = {}, action) => {
    switch (action.type) {
        case ERROR_ACTION.EDIT_PUBLIC_ACCOUNT_VALIDATE :
            return action.data
        case SHOW_PUBLIC :
            return {}
        case EDIT_PUBLIC_ACCOUNT :
            return {}
        default :
            return state
    }
}
