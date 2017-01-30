import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import { UserAuthWrapper } from 'redux-auth-wrapper'
import { authenticate } from '../app/User/middleware/middleware'

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user.profile,
    redirectAction: authenticate,
    wrapperDisplayName: 'UserIsAuthenticated'
})

import Container from '../app/Container'
import Profile from '../app/Content/Profile/Profile'
import Admin from '../app/Content/Admin/Admin'
import Account from '../app/Content/Account/Account'
import Login from '../app/User/Login'

export default class RouterComponent extends Component {
	render () {
		return (
			<Router history={browserHistory}>
				<IndexRedirect to="/" />
				<Route path="/" component={Home}/>
				<Route path="/admin" component={UserIsAuthenticated(Container)}/>
					<Route path="/admin/admin" component={Admin}>
					<Route path="/admin/profile" component={Profile}/>
					<Route path="/admin/accounts" component={Account}/>
				</Route>
				<Route path="/admin/login" component={Login}/>
			</Router>
		)
	}
}
