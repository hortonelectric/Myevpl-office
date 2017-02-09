export const SHOW_PROFILE_ADD_SCREEN				= 'SHOW_PROFILE_ADD_SCREEN'
export const HIDE_PROFILE_ADD_SCREEN				= 'HIDE_PROFILE_ADD_SCREEN'
export const SHOW_PROFILE_DELETE_SCREEN			= 'SHOW_PROFILE_DELETE_SCREEN'
export const HIDE_PROFILE_DELETE_SCREEN          = 'HIDE_PROFILE_DELETE_SCREEN'
export const SHOW_PROFILE_EDIT_USER_SCREEN	 	= 'SHOW_PROFILE_EDIT_USER_SCREEN'
export const HIDE_PROFILE_EDIT_USER_SCREEN		= 'HIDE_PROFILE_EDIT_USER_SCREEN'
export const SHOW_PROFILE_EDIT_ACCOUNT_SCREEN	= 'SHOW_PROFILE_EDIT_ACCOUNT_SCREEN'
export const HIDE_PROFILE_EDIT_ACCOUNT_SCREEN	= 'HIDE_PROFILE_EDIT_ACCOUNT_SCREEN'


export function showProfileAddModal() {
    return {
        type: SHOW_PROFILE_ADD_SCREEN
    }
}

export function hideProfileAddModal() {
    return {
        type: HIDE_PROFILE_ADD_SCREEN
    }
}

export function showProfileDeleteModal() {
    return {
        type: SHOW_PROFILE_DELETE_SCREEN
    }
}

export function hideProfileDeleteModal() {
    return {
        type: HIDE_PROFILE_DELETE_SCREEN
    }
}

export function showProfileEditUserModal() {
    return {
        type: SHOW_PROFILE_EDIT_USER_SCREEN
    }
}

export function hideProfileEditUserModal() {
    return {
        type: HIDE_PROFILE_EDIT_USER_SCREEN
    }
}

export function showProfileEditAccountModal() {
    return {
        type: SHOW_PROFILE_EDIT_ACCOUNT_SCREEN
    }
}

export function hideProfileEditAccountModal() {
    return {
        type: HIDE_PROFILE_EDIT_ACCOUNT_SCREEN
    }
}
