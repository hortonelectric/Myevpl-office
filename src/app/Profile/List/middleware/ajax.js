import request from 'superagent'
import config from '../../../../../config.json'

const api = config.current

export const listProfiles = (cb) => {
	// const authorization = sessionStorage.getItem('header')
	request
        .get(`${api}profiles`)
        // .set('Authorization', authorization)
        .end((error, response) => {
			cb(response.status, response.body)
        })
}
