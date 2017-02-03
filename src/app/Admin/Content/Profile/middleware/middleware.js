import async from 'async'

import * as ajax from './ajax'
import * as validate from './validation'
import * as modal from '../action/modalAction'
import * as action from '../action/action'
import * as loaderAction from '../action/loaderAction'
import * as errorAction from '../action/errorAction'
import { handle } from './handleResponse'
import {logout} from '../../../User/middleware/middleware'

export const listProfiles = () => {

    return dispatch => {

		dispatch(loaderAction.tableLoaderOn())
        ajax.listProfiles((status, response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) dispatch(action.listProfiles(response.data))
			dispatch(loaderAction.tableLoaderOff())
        })

    }
}

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

const handleUnauthorized = () => {
    return dispatch => {
        dispatch(logout({message: 'Your token is invalid or expired, you will be redirected to the log-in page'}))
    }
}
