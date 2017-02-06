import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-toolbox'

class Content extends React.Component {
    render() {
        return (
			<section id="content_wrapper" style={{paddingTop: 25, paddingBottom: 25, paddingLeft: 50, paddingRight: 50}}>
				<section id="content">
				   {this.props.children}
				</section>
			</section>
        )
    }
}

export default connect( state => ({
	value : state.admin.profile.list
}) )(Content)
