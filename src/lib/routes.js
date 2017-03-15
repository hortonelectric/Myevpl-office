import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
// import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

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
			<BrowserRouter>
				<Container>
					<Route path="/" component={Home} />
					<Route path="/profile" component={Profile} />
				</Container>
			</BrowserRouter>
		)
	}
}
