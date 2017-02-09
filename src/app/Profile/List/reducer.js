import * as ACTION from './action'

export const profiles = (state = [], action) => {

    switch (action.type) {

        case ACTION.LIST_PROFILES :
			return [ ...action.data ]

        case ACTION.ADD_PROFILE :
            return [ ...state, action.data ]

        case ACTION.EDIT_PROFILE :
            return state.map(profileState => profileState._id === action.data._id ? action.data : profileState)

        default:
            return state
    }
}

export const selected = (state = null, action) => {

    switch (action.type) {
        case ACTION.SELECT_PROFILE :
            return action.id
        default :
            return state
    }

}

