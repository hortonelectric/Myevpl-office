import { combineReducers } from 'redux'

import form from './formReducer'

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

import * as Profile from '../app/Profile/List/reducer'
import * as ProfileFilter from '../app/Profile/Filter/reducer'
import * as ProfileFilterVenue from '../app/Profile/Filter/Venue/reducer'
import * as ProfileManagement from '../app/Profile/Management/reducer'

// import { alert } from '../app/Admin/Alert/reducer'

const store = combineReducers({

    //Profile Filter
	profile : combineReducers({
		list   		: Profile.profiles,
		add			: combineReducers({
			profileType 			: ProfileManagement.addProfileType,
			profilePage 			: ProfileManagement.addProfilePage,
			profileVenueEventAreas	: ProfileManagement.addProfileVenueEventAreas
		}),
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
