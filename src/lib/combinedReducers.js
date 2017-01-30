import { combineReducers } from 'redux'

import form from './formReducer'

import * as Public from '../app/Content/Public/reducer/reducer'
import * as PublicLoader from '../app/Content/Public/reducer/loaderReducer'
import * as PublicFilter from '../app/Content/Public/PublicFilter/reducer'

// import * as Admin from '../app/Content/Admin/reducer/reducer'
// import * as AdminLoader from '../app/Content/Admin/reducer/loaderReducer'
// import * as AdminErrors from '../app/Content/Admin/reducer/errorReducer'
// import * as AdminModals from '../app/Content/Admin/reducer/modalReducer'
//
// import * as GameHistory from '../app/Content/GameHistory/reducer/reducer'
// import * as GameHistoryLoader from '../app/Content/GameHistory/reducer/loaderReducer'
// import { gameHistoryDetailModal } from '../app/Content/GameHistory/reducer/modalReducer'
//
// import * as BetHistory from '../app/Content/BetHistory/reducer/reducer'
// import * as BetHistoryLoader from '../app/Content/BetHistory/reducer/loaderReducer'
// import * as BetHistoryFilter from '../app/Content/BetHistory/BetHistoryFilter/reducer'
// import { betHistoryDetailModal } from '../app/Content/BetHistory/reducer/modalReducer'
//
// import * as User from '../app/User/reducer/reducer'
// import * as UserError from '../app/User/reducer/errorReducer'
// import * as UserLoader from '../app/User/reducer/loaderReducer'

import { alert } from '../app/Alert/reducer'
import { serverMaintenanceModal } from '../app/Server/reducer'

import * as socket from '../socket/reducer'

const store = combineReducers({

	//Public Store
    publicState : combineReducers({
        list   		: Public.publics,
        selected    : Public.selected,
		loader		: combineReducers({
			table			: PublicLoader.tableLoader,
		})    
	}),

	// //Admin Store
    // admin : combineReducers({
    //     list   		: Admin.admins,
    //     selected    : Admin.selected,
    //     modal       : combineReducers({
    //         add                : AdminModals.adminAddModal,
    //         editUser  		   : AdminModals.adminEditUserModal,
    //         editAccount        : AdminModals.adminEditAccountModal,
    //         delete             : AdminModals.adminDeleteModal
    //     }),
    //     error       : combineReducers({
    //         add             : AdminErrors.addAdminError,
    //         editUser       	: AdminErrors.editAdminUserError,
    //         editAccount     : AdminErrors.editAdminAccountError,
    //     }),
	// 	loader		: combineReducers({
	// 		table			: AdminLoader.tableLoader,
    //         add             : AdminLoader.addFormLoader,
    // //         editUser  		: AdminLoader.editUserFormLoader,
    // //         editAccount     : AdminLoader.editAccountFormLoader,
    //         delete          : AdminLoader.deleteFormLoader
	// 	})
    // }),
    //
	// //Game History Store
    // gameHistory : combineReducers({
    //     list   		: GameHistory.games,
    //     selected    : GameHistory.selected,
    //     modal       : combineReducers({
    //         details : gameHistoryDetailModal
    //     }),
	// 	loader		: combineReducers({
	// 		table	: GameHistoryLoader.tableLoader
	// 	})
    // }),
	//
	// //Bet History Store
    // betHistory : combineReducers({
    //     list   		: BetHistory.bets,
    //     selected    : BetHistory.selected,
    //     modal       : combineReducers({
    //         details : betHistoryDetailModal
    //     }),
	// 	loader		: combineReducers({
	// 		table	: BetHistoryLoader.tableLoader
	// 	}),
	// 	filter 		: combineReducers({
	// 		userId		: BetHistoryFilter.userId,		
	// 		userIdValue	: BetHistoryFilter.userIdValue
	// 	})
    // }),
	//
	// //User Store
	// user        : combineReducers({
	// 	profile : User.user,
	// 	error   : UserError.error,
	// 	loader	: UserLoader.loader
	// }),
	
	// Server
	serverMaintenanceModal,
	
	//Sockets
	socket 		: combineReducers({
		gameinfo	: socket.gameinfo
	}),
	
    // Alert Store
	alert,
	
    //redux-form
    form,

    // Alert Store
	alert,
	
    //redux-form
    form,

})

export default store
