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
import Public from '../app/Content/Public/Public'
import Admin from '../app/Content/Admin/Admin'
import Login from '../app/User/Login'

export default class RouterComponent extends Component {
	render () {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={UserIsAuthenticated(Container)}>
					<IndexRedirect to="/player" />
					<Route path="/public" component={Public}/>
					<Route path="/admin" component={Admin}/>
				</Route>
				<Route path="/login" component={Login}/>
			</Router>
		)
	}
}
