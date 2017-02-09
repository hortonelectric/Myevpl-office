import React, { Component } from 'react'
import { Layout, Panel } from 'react-toolbox'

import Header from './Header/Header'

class Container extends Component {
    render() {
		return (
			<Layout>
				<Panel>
					<Header />
					<div children={this.props.children}></div>
				</Panel>
			</Layout>
	   )
	}
}

export default Container
