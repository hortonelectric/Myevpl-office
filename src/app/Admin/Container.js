import React, { Component } from 'react'

import Header from './Header/Header'
import Menu from './Menu/Menu'
import Content from './Content/Content'
import Alert from './Alert/Alert'
import ServerMaintenance from './Server/ServerMaintenance'

class Container extends Component {
    toggleDrawer() {

    }
    render() {
		return (
			<div>
				<Header />
				<Menu />
				<Content children={this.props.children}></Content>
				<Alert />
			</div>
	   )
	}
}

export default Container
