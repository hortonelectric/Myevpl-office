export const SHOW_PUBLIC_ADD_SCREEN				= 'SHOW_PUBLIC_ADD_SCREEN'
export const HIDE_PUBLIC_ADD_SCREEN				= 'HIDE_PUBLIC_ADD_SCREEN'
export const SHOW_PUBLIC_DELETE_SCREEN			= 'SHOW_PUBLIC_DELETE_SCREEN'
export const HIDE_PUBLIC_DELETE_SCREEN          = 'HIDE_PUBLIC_DELETE_SCREEN'
export const SHOW_PUBLIC_EDIT_USER_SCREEN	 	= 'SHOW_PUBLIC_EDIT_USER_SCREEN'
export const HIDE_PUBLIC_EDIT_USER_SCREEN		= 'HIDE_PUBLIC_EDIT_USER_SCREEN'
export const SHOW_PUBLIC_EDIT_ACCOUNT_SCREEN	= 'SHOW_PUBLIC_EDIT_ACCOUNT_SCREEN'
export const HIDE_PUBLIC_EDIT_ACCOUNT_SCREEN	= 'HIDE_PUBLIC_EDIT_ACCOUNT_SCREEN'


export function showPublicAddModal() {
    return {
        type: SHOW_PUBLIC_ADD_SCREEN
    }
}

export function hidePublicAddModal() {
    return {
        type: HIDE_PUBLIC_ADD_SCREEN
    }
}

export function showPublicDeleteModal() {
    return {
        type: SHOW_PUBLIC_DELETE_SCREEN
    }
}

export function hidePublicDeleteModal() {
    return {
        type: HIDE_PUBLIC_DELETE_SCREEN
    }
}

export function showPublicEditUserModal() {
    return {
        type: SHOW_PUBLIC_EDIT_USER_SCREEN
    }
}

export function hidePublicEditUserModal() {
    return {
        type: HIDE_PUBLIC_EDIT_USER_SCREEN
    }
}

export function showPublicEditAccountModal() {
    return {
        type: SHOW_PUBLIC_EDIT_ACCOUNT_SCREEN
    }
}

export function hidePublicEditAccountModal() {
    return {
        type: HIDE_PUBLIC_EDIT_ACCOUNT_SCREEN
    }
}
