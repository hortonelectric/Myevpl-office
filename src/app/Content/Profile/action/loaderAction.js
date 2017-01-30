export const PROFILE_TABLE_LOADER_ON 				= 'PROFILE_TABLE_LOADER_ON'
export const PROFILE_TABLE_LOADER_OFF 				= 'PROFILE_TABLE_LOADER_OFF'
export const PROFILE_ADD_FORM_LOADER_ON 			= 'PROFILE_ADD_FORM_LOADER_ON'
export const PROFILE_ADD_FORM_LOADER_OFF 			= 'PROFILE_ADD_FORM_LOADER_OFF'
export const PROFILE_EDIT_ACCOUNT_FORM_LOADER_ON 	= 'PROFILE_EDIT_ACCOUNT_FORM_LOADER_ON'
export const PROFILE_EDIT_ACCOUNT_FORM_LOADER_OFF 	= 'PROFILE_EDIT_ACCOUNT_FORM_LOADER_OFF'
export const PROFILE_EDIT_USER_FORM_LOADER_ON 		= 'PROFILE_EDIT_USER_FORM_LOADER_ON'
export const PROFILE_EDIT_USER_FORM_LOADER_OFF		= 'PROFILE_EDIT_USER_FORM_LOADER_OFF'
export const PROFILE_DELETE_FORM_LOADER_ON 		= 'PROFILE_DELETE_FORM_LOADER_ON'
export const PROFILE_DELETE_FORM_LOADER_OFF 		= 'PROFILE_DELETE_FORM_LOADER_OFF'

export const tableLoaderOn = () => {
    return {
        type: PROFILE_TABLE_LOADER_ON
    }
}

export const tableLoaderOff = () => {
    return {
        type: PROFILE_TABLE_LOADER_OFF
    }
}

export const addFormLoaderOn = () => {
    return {
        type: PROFILE_ADD_FORM_LOADER_ON
    }
}

export const addFormLoaderOff = () => {
    return {
        type: PROFILE_ADD_FORM_LOADER_OFF
    }
}

export const editAccountFormLoaderOn = () => {
    return {
        type: PROFILE_EDIT_ACCOUNT_FORM_LOADER_ON
    }
}

export const editAccountFormLoaderOff = () => {
    return {
        type: PROFILE_EDIT_ACCOUNT_FORM_LOADER_OFF
    }
}

export const editUserFormLoaderOn = () => {
    return {
        type: PROFILE_EDIT_USER_FORM_LOADER_ON
    }
}

export const editUserFormLoaderOff = () => {
    return {
        type: PROFILE_EDIT_USER_FORM_LOADER_OFF
    }
}

export const deleteFormLoaderOn = () => {
    return {
        type: PROFILE_DELETE_FORM_LOADER_ON
    }
}

export const deleteFormLoaderOff = () => {
    return {
        type: PROFILE_DELETE_FORM_LOADER_OFF
    }
}
