import React, {Component} from 'react'
import { connect } from 'react-redux'

import ProfileAdd from './container/ProfileAdd'

class Profile extends Component {

    render() {
        return (
            <section id="profile">
				<ProfileAdd />
			</section>
        )
    }
}

export default connect()(Profile)
