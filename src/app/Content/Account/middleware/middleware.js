import async from 'async'

import * as ajax from './ajax'
import * as validate from './validation'
import * as modal from '../action/modalAction'
import * as action from '../action/action'
import * as loaderAction from '../action/loaderAction'
import * as errorAction from '../action/errorAction'
import { handle } from './handleResponse'
import {logout} from '../../../User/middleware/middleware'

export const listAccounts = () => {

    return dispatch => {

		dispatch(loaderAction.tableLoaderOn())
        ajax.listAccounts((status, response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) dispatch(action.listAccounts(response.data))
			dispatch(loaderAction.tableLoaderOff())
        })

    }
}

export const listAccountsOnline = () => {

    return dispatch => {

        ajax.listAccountsOnline((status, response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) dispatch(action.listOnlineAccounts(response))
        })

    }
}

export const editAccount = (id, payload) => {

    return dispatch =>{

        ajax.editAccount(id ,payload, (status,response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) dispatch(action.editAccount(response))
        })

    }
}

const handleUnauthorized = () => {
    return dispatch => {
        dispatch(logout({message: 'Your token is invalid or expired, you will be redirected to the log-in page'}))
    }
}
