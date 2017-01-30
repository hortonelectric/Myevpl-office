export const LIST_PUBLICS			= 'LIST_PUBLICS'
export const SELECT_PUBLIC      	= 'SELECT_PUBLIC'
export const EDIT_PUBLIC        	= 'EDIT_PUBLIC'

export const listPublics = (data) => {
    return {
        type: LIST_PUBLICS,
        data
    }
}

export const selectPublic = (id) => {
    return {
        type: SELECT_PUBLIC,
        id
    }
}

export const editPublic = (data) => {
    return {
        type: EDIT_PUBLIC,
        data
    }
}
