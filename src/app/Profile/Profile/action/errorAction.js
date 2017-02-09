export const ADD_PROFILE_VALIDATE             = 'ADD_PROFILE_VALIDATE'
export const EDIT_PROFILE_USER_VALIDATE 		 = 'EDIT_PROFILE_USER_VALIDATE'
export const EDIT_PROFILE_ACCOUNT_VALIDATE    = 'EDIT_PROFILE_ACCOUNT_VALIDATE'

export function onAddProfileError(data) {
    return {
        type: ADD_PROFILE_VALIDATE,
        data
    }
}

export function onEditProfileUserError(data) {
    return {
        type: EDIT_PROFILE_USER_VALIDATE,
        data
    }
}

export function onEditProfileAccountError(data) {
    return {
        type: EDIT_PROFILE_ACCOUNT_VALIDATE,
        data
    }
}
