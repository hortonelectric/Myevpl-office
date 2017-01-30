import React, {Component} from 'react'
import { connect } from 'react-redux'
import Button from 'react-toolbox/lib/button';
import nextButton from 'theme/nextButton.scss';
import { browserHistory } from 'react-router'

import ProfileTable from './container/ProfileTable'
// import ProfileDetail from './container/ProfileDetail'
// import ProfileFilter from './ProfileFilter/ProfileFilter'

import { listProfiles } from './middleware/middleware'

class Profile extends Component {

    componentWillMount = () => {
        this.props.dispatch(listProfiles())
    }

    render() {
        return (
            <section id="player">
				<div className="row">
					<div className="col-md-5">
						<ProfileTable />
					</div>
				</div>
			</section>
        )
    }
    //
    // render() {
    //     return (
    //         <section id="player">
	// 			<div className="row">
	// 				<div className="col-md-5">
	// 					<ProfileTable />
	// 				</div>
	// 				<div className="col-md-7">
	// 					<ProfileDetail />
	// 				</div>
	// 			</div>
	// 			<div className="row">
	// 				<div className="col-xs-12">
	// 					<ProfileFilter />
	// 				</div>
	// 			</div>
	// 		</section>
    //     )
    // }
}

export default connect()(Profile)
