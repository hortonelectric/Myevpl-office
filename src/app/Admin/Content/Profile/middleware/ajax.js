import request from 'superagent'
import config from '../../../../../../config.json'

const api = config.current

export const listProfiles = (cb) => {
	const authorization = sessionStorage.getItem('header')
	request
        .get(`${api}profiles`)
        .set('Authorization', authorization)
        .end((error, response) => {
			cb(response.status, response.body)
        })
}

export const addProfile = (data, cb) => {
	// const authorization = sessionStorage.getItem('header')
	request
        .post(`${api}profile`)
        // .set('Authorization', authorization)
        .send(data)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}

export const editProfile = (id, data, cb) => {
	const authorization = sessionStorage.getItem('header')
	request
        .put(`${api}profiles/${id}`)
        .set('Authorization', authorization)
        .send(data)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}

export const  deleteProfile = (id, cb) => {
	const authorization = sessionStorage.getItem('header')
    request
        .del(`${api}profiles/${id}`)
        .set('Authorization', authorization)
        .end((error, response) => {
            cb(response.status, response.body)
        })
}

//
// export const editPicture = (id, data, cb) => {
//     request
//         .put(`${api}employees/${id}/photo`)
//         .send(data)
//         .end((error, response) => {
//             if(response.status === 500) {
//                 addPicture(id, data, cb)
//             }else{
//                 cb(response.status, response.body)
//             }
//         })
// }
//
// const addPicture = (id, data, cb) => {
//     request
//         .post(`${api}employees/${id}/photo`)
//         .send(data)
//         .end((error, response) => {
//             cb(response.status, response.body)
//         })
// }
