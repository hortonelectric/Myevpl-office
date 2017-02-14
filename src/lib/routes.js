import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

// import { UserAuthWrapper } from 'redux-auth-wrapper'
// import { authenticate } from '../app/Admin/User/middleware/middleware'

// const AdminAuthentication = UserAuthWrapper({
//     authSelector		: state => state.admin.user.profile,
//     redirectAction		: authenticate,
//     wrapperDisplayName	: 'AdminIsAuthenticated'
// })

import Profile from '../app/Profile/Management/Profile'
import Container from '../app/Container'
import Home from '../app/Home/Home'

export default class RouterComponent extends Component {
	render () {
		return (
			<Router history={browserHistory} >
				<Route path="/" component={Container}>
					<IndexRoute component={Home}/>
					<Route path="/profile" component={Profile} />
				</Route>
			</Router>
		)
	}
}
