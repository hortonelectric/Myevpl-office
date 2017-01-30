import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {logout} from '../User/middleware/middleware'
import { showServerMaintenanceModal } from '../Server/action'

class Menu extends React.Component {

	handleClick = (e) => {
		this.props.dispatch(logout({message: 'You have sign out, you will be redirected to the sign in page'}))
	}

    render(){

		const role = sessionStorage.getItem('role')

		if(role == 'admin'){
			return(
				<aside id="sidebar_left" className="nano nano-primary affix">
				<div className="sidebar-left-content nano-content">
					<ul className="nav sidebar-menu">
						<li className="sidebar-label pt20">Administrator</li>
						<li>
							<Link to="/admin">
								<span className="glyphicon glyphicon-king" />
								<span className="sidebar-title">Admin Users</span>
							</Link>
						</li>

						<li className="sidebar-label pt15">Profile Management</li>
						<li>
							<Link to="/profiles">
								<span className="glyphicon glyphicon-user" />
								<span className="sidebar-title">Profiles</span>
							</Link>
						</li>

						<li className="sidebar-label pt15">Account Management</li>
						<li>
							<Link to="/accounts">
								<span className="glyphicon glyphicon-user" />
								<span className="sidebar-title">Accounts</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
			)
		}

		if(role == 'account'){
			return(
				<aside id="sidebar_left" className="nano nano-primary affix">
				<div className="sidebar-left-content nano-content">
					<ul className="nav sidebar-menu">

						<li className="sidebar-label pt15">ATM</li>
						<li>
							<Link to="/ATM">
							<span className="fa fa-btc" />
								<span className="sidebar-title">ATM Management</span>
							</Link>
						</li>

						<li className="sidebar-label pt20">User</li>
						<li>
							<a href="#" onClick={this.handleClick}>
								<span className="fa fa-sign-out" />
								<span className="sidebar-title">Sign Out</span>
							</a>
						</li>
					</ul>

				</div>
			</aside>
			)
	 	}

    }
}

export default Menu
