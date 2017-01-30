export const ADD_PUBLIC_VALIDATE             = 'ADD_PUBLIC_VALIDATE'
export const EDIT_PUBLIC_USER_VALIDATE 		 = 'EDIT_PUBLIC_USER_VALIDATE'
export const EDIT_PUBLIC_ACCOUNT_VALIDATE    = 'EDIT_PUBLIC_ACCOUNT_VALIDATE'

export function onAddPublicError(data) {
    return {
        type: ADD_PUBLIC_VALIDATE,
        data
    }
}

export function onEditPublicUserError(data) {
    return {
        type: EDIT_PUBLIC_USER_VALIDATE,
        data
    }
}

export function onEditPublicAccountError(data) {
    return {
        type: EDIT_PUBLIC_ACCOUNT_VALIDATE,
        data
    }
}
