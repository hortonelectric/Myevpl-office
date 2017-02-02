import React, {Component} from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
    render() {
        return (
            <section id="content_wrapper">
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
