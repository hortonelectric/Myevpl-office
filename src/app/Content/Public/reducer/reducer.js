import * as ACTION from '../action/action'

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

export const selected = (state = null, action) => {

    switch (action.type) {
        case ACTION.SELECT_PUBLIC :
            return action.id
        default :
            return state
    }

}
