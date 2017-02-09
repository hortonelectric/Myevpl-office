import { combineReducers } from 'redux'

import form from './formReducer'

import * as Profile from '../app/Profile/List/reducer'
// import * as Admin_ProfileLoader from '../app/Admin/Content/Profile/reducer/loaderReducer'
// import * as Admin_ProfileFilter from '../app/Admin/Content/Profile/ProfileFilter/reducer'
//
// import * as Admin_Admin from '../app/Admin/Content/Admin/reducer/reducer'
// import * as Admin_AdminLoader from '../app/Admin/Content/Admin/reducer/loaderReducer'
// import * as Admin_AdminErrors from '../app/Admin/Content/Admin/reducer/errorReducer'
// import * as Admin_AdminModals from '../app/Admin/Content/Admin/reducer/modalReducer'
//
// import * as Admin_User from '../app/Admin/User/reducer/reducer'
// import * as Admin_UserError from '../app/Admin/User/reducer/errorReducer'
// import * as Admin_UserLoader from '../app/Admin/User/reducer/loaderReducer'

import * as ProfileFilter from '../app/Profile/Filter/reducer'
import * as ProfileFilterVenue from '../app/Profile/Filter/Venue/reducer'

// import { alert } from '../app/Admin/Alert/reducer'

const store = combineReducers({

	//Administration Module Store
	// admin : combineReducers({
		
		// //Profile Store 
		// profile : combineReducers({
		//   selected    	: Admin_Profile.selected,
		// 	  loader	: combineReducers({
		// 		table		: Admin_ProfileLoader.tableLoader,
		// 	}),
		// 	addProfileFormType 	: Admin_Profile.addProfileFormType,
		// 	addProfilePage 		: Admin_Profile.addProfilePage
		// }),

	// 	//Admin Store
	// 	admin : combineReducers({
	// 		list   		: Admin_Admin.admins,
	// 		selected    : Admin_Admin.selected,
	// 		modal       : combineReducers({
	// 			add                : Admin_AdminModals.adminAddModal,
	// 			editUser  		   : Admin_AdminModals.adminEditUserModal,
	// 			editAccount        : Admin_AdminModals.adminEditAccountModal,
	// 			delete             : Admin_AdminModals.adminDeleteModal
	// 		}),
	// 		error       : combineReducers({
	// 			add             : Admin_AdminErrors.addAdminError,
	// 			editUser       	: Admin_AdminErrors.editAdminUserError,
	// 			editAccount     : Admin_AdminErrors.editAdminAccountError,
	// 		}),
	// 		loader		: combineReducers({
	// 			table			: Admin_AdminLoader.tableLoader,
	// 			add             : Admin_AdminLoader.addFormLoader,
	// 	//         editUser  		: Admin_AdminLoader.editUserFormLoader,
	// 	//         editAccount     : Admin_AdminLoader.editAccountFormLoader,
	// 			delete          : Admin_AdminLoader.deleteFormLoader
	// 		})
	// 	}),
	// 	
	// 	//User Store
	// 	user : combineReducers({
	// 		profile : Admin_User.user,
	// 		error   : Admin_UserError.error,
	// 		loader	: Admin_UserLoader.loader
	// 	}),
	// 	
	// 	// Alert Store
	// 	alert,
	//
	// }),
	
    //Profile Filter
	profile : combineReducers({
		list   		: Profile.profiles,
		filter 		: combineReducers({
			profileType : ProfileFilter.profileType,
			cateredTo 	: ProfileFilter.cateredTo,
			venue 		: combineReducers({
				isAllowedOutside : ProfileFilterVenue.isAllowedOutside,
				isProvideOutside : ProfileFilterVenue.isProvideOutside,
				venueType		 : ProfileFilterVenue.venueType
			})
		})	
	}),

    //redux-form
    form
})

export default store
