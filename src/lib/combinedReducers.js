import { combineReducers } from 'redux'

import form from './formReducer'

import * as Admin_Profile from '../app/Admin/Content/Profile/reducer/reducer'
import * as Admin_ProfileLoader from '../app/Admin/Content/Profile/reducer/loaderReducer'
import * as Admin_ProfileFilter from '../app/Admin/Content/Profile/ProfileFilter/reducer'

import * as Admin_Admin from '../app/Admin/Content/Admin/reducer/reducer'
import * as Admin_AdminLoader from '../app/Admin/Content/Admin/reducer/loaderReducer'
import * as Admin_AdminErrors from '../app/Admin/Content/Admin/reducer/errorReducer'
import * as Admin_AdminModals from '../app/Admin/Content/Admin/reducer/modalReducer'

import * as Admin_User from '../app/Admin/User/reducer/reducer'
import * as Admin_UserError from '../app/Admin/User/reducer/errorReducer'
import * as Admin_UserLoader from '../app/Admin/User/reducer/loaderReducer'

import { alert } from '../app/Admin/Alert/reducer'

const store = combineReducers({

	//Administration Module Store
	admin : combinedReducers({
		
		//Profile Store 
		profile : combineReducers({
		  list   		: Profile.profiles,
		  selected    	: Profile.selected,
			  loader	: combineReducers({
				table		: ProfileLoader.tableLoader,
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
	
	})
	
    //redux-form
    form
})

export default store
