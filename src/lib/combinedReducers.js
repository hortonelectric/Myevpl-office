import { combineReducers } from 'redux'

import form from './formReducer'

import * as Profile from '../app/Content/Profile/reducer/reducer'
import * as ProfileLoader from '../app/Content/Profile/reducer/loaderReducer'
import * as ProfileFilter from '../app/Content/Profile/ProfileFilter/reducer'

import * as Admin from '../app/Content/Admin/reducer/reducer'
import * as AdminLoader from '../app/Content/Admin/reducer/loaderReducer'
import * as AdminErrors from '../app/Content/Admin/reducer/errorReducer'
import * as AdminModals from '../app/Content/Admin/reducer/modalReducer'

import * as User from '../app/User/reducer/reducer'
import * as UserError from '../app/User/reducer/errorReducer'
import * as UserLoader from '../app/User/reducer/loaderReducer'

import { alert } from '../app/Alert/reducer'
import { serverMaintenanceModal } from '../app/Server/reducer'

import * as socket from '../socket/reducer'

const store = combineReducers({

	//Profile Store
    profileState : combineReducers({
      profiles   		: Profile.profiles,
      selected    : Profile.selected,
		  loader		: combineReducers({
			table			: ProfileLoader.tableLoader,
		})    
	}),

	//Admin Store
    admin : combineReducers({
        list   		: Admin.admins,
        selected    : Admin.selected,
        modal       : combineReducers({
            add                : AdminModals.adminAddModal,
            editUser  		   : AdminModals.adminEditUserModal,
            editAccount        : AdminModals.adminEditAccountModal,
            delete             : AdminModals.adminDeleteModal
        }),
        error       : combineReducers({
            add             : AdminErrors.addAdminError,
            editUser       	: AdminErrors.editAdminUserError,
            editAccount     : AdminErrors.editAdminAccountError,
        }),
		loader		: combineReducers({
			table			: AdminLoader.tableLoader,
            add             : AdminLoader.addFormLoader,
    //         editUser  		: AdminLoader.editUserFormLoader,
    //         editAccount     : AdminLoader.editAccountFormLoader,
            delete          : AdminLoader.deleteFormLoader
		})
    }),
    //
	//User Store
	user : combineReducers({
		profile : User.user,
		error   : UserError.error,
		loader	: UserLoader.loader
	}),
	
	// Server
	serverMaintenanceModal,
	
	//Sockets
	socket 		: combineReducers({
		gameinfo	: socket.gameinfo
	}),
	
    // Alert Store
	alert,
	
    //redux-form
    form
})

export default store
