export const PUBLIC_TABLE_LOADER_ON 				= 'PUBLIC_TABLE_LOADER_ON'
export const PUBLIC_TABLE_LOADER_OFF 				= 'PUBLIC_TABLE_LOADER_OFF'
export const PUBLIC_ADD_FORM_LOADER_ON 			= 'PUBLIC_ADD_FORM_LOADER_ON'
export const PUBLIC_ADD_FORM_LOADER_OFF 			= 'PUBLIC_ADD_FORM_LOADER_OFF'
export const PUBLIC_EDIT_ACCOUNT_FORM_LOADER_ON 	= 'PUBLIC_EDIT_ACCOUNT_FORM_LOADER_ON'
export const PUBLIC_EDIT_ACCOUNT_FORM_LOADER_OFF 	= 'PUBLIC_EDIT_ACCOUNT_FORM_LOADER_OFF'
export const PUBLIC_EDIT_USER_FORM_LOADER_ON 		= 'PUBLIC_EDIT_USER_FORM_LOADER_ON'
export const PUBLIC_EDIT_USER_FORM_LOADER_OFF		= 'PUBLIC_EDIT_USER_FORM_LOADER_OFF'
export const PUBLIC_DELETE_FORM_LOADER_ON 		= 'PUBLIC_DELETE_FORM_LOADER_ON'
export const PUBLIC_DELETE_FORM_LOADER_OFF 		= 'PUBLIC_DELETE_FORM_LOADER_OFF'

export const tableLoaderOn = () => {
    return {
        type: PUBLIC_TABLE_LOADER_ON
    }
}

export const tableLoaderOff = () => {
    return {
        type: PUBLIC_TABLE_LOADER_OFF
    }
}

export const addFormLoaderOn = () => {
    return {
        type: PUBLIC_ADD_FORM_LOADER_ON
    }
}

export const addFormLoaderOff = () => {
    return {
        type: PUBLIC_ADD_FORM_LOADER_OFF
    }
}

export const editAccountFormLoaderOn = () => {
    return {
        type: PUBLIC_EDIT_ACCOUNT_FORM_LOADER_ON
    }
}

export const editAccountFormLoaderOff = () => {
    return {
        type: PUBLIC_EDIT_ACCOUNT_FORM_LOADER_OFF
    }
}

export const editUserFormLoaderOn = () => {
    return {
        type: PUBLIC_EDIT_USER_FORM_LOADER_ON
    }
}

export const editUserFormLoaderOff = () => {
    return {
        type: PUBLIC_EDIT_USER_FORM_LOADER_OFF
    }
}

export const deleteFormLoaderOn = () => {
    return {
        type: PUBLIC_DELETE_FORM_LOADER_ON
    }
}

export const deleteFormLoaderOff = () => {
    return {
        type: PUBLIC_DELETE_FORM_LOADER_OFF
    }
}
