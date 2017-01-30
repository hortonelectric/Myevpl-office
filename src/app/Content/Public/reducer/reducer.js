import * as ACTION from '../action/action'
import { SOCKET_PUBLIC_LIST } from '../../../../socket/action'

export const publics = (state = [], action) => {

    switch (action.type) {

        case ACTION.LIST_PUBLICS :
			return [ ...action.data ]

        case ACTION.EDIT_PUBLIC :
            return state.map(public => public._id === action.data._id ? action.data : public)

        default:
            return state
    }
}

export const online = (state = {}, action) => {

    switch (action.type) {

        case ACTION.LIST_PUBLICS_ONLINE :
			return action.data

        case SOCKET_PUBLIC_LIST :
			return action.data

        default:
            return state
    }
}

export const selected = (state = null, action) => {

    switch (action.type) {
        case ACTION.SELECT_PUBLIC :
            return action.id
        default :
            return state
    }

}
