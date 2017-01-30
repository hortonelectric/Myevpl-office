import request from 'superagent'
import config from '../../../../../../config.json'

const api = config.current

export const listAccounts = (cb) => {
	const authorization = sessionStorage.getItem('header')
	request
        .get(`${api}accounts`)
        .set('Authorization', authorization)
        .end((error, response) => {
			cb(response.status, response.body)
        })
}

export const listAccountsOnline = (cb) => {
	const authorization = sessionStorage.getItem('header')
	request
        .get(`${api}players/online`)
        .set('Authorization', authorization)
        .end((error, response) => {
			cb(response.status, response.body)
        })
}

export const editAccount = (id, data, cb) => {
	const authorization = sessionStorage.getItem('header')
	request
        .put(`${api}accounts/${id}`)
        .set('Authorization', authorization)
        .send(data)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}

export const  deleteAccount = (id, cb) => {
	const authorization = sessionStorage.getItem('header')
    request
        .del(`${api}accounts/${id}`)
        .set('Authorization', authorization)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}

export const editPicture = (id, data, cb) => {
    request
        .put(`${api}employees/${id}/photo`)
        .send(data)
        .end((error, response) => {
            if(response.status === 500) {
                addPicture(id, data, cb)
            }else{
                cb(response.status, response.body)
            }
        })
}

const addPicture = (id, data, cb) => {
    request
        .post(`${api}employees/${id}/photo`)
        .send(data)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}
