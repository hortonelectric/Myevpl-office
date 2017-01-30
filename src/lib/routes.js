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
				<Route path="/" component={Profile}/>
				<Route path="/admin" component={UserIsAuthenticated(Container)}>
					<IndexRedirect to="/admins" />
				<Route path="/admins" component={Admin}/>
        <Route path="/accounts" component={Account}/>
				</Route>
				<Route path="/login" component={Login}/>
			</Router>
		)
	}
}
