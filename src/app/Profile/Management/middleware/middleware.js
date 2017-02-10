import async from 'async'

import * as ajax from './ajax'
import * as validate from './validation'
import * as action from '../action'

export const addProfile = (payload) => {

    return dispatch =>{

        ajax.addProfile(payload, (status,response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) {
				dispatch(
					action.addProfile(response)
				)
			}
        })

    }
}

// const handleUnauthorized = () => {
//     return dispatch => {
//         dispatch(logout({message: 'Your token is invalid or expired, you will be redirected to the log-in page'}))
//     }
// }
