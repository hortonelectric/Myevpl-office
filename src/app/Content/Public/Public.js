import React, {Component} from 'react'
import { connect } from 'react-redux'

import PublicTable from './container/PublicTable'
// import PublicDetail from './container/PublicDetail'
// import PublicFilter from './PublicFilter/PublicFilter'

import { listPublics } from './middleware/middleware'

class Public extends Component {

    componentWillMount = () => {
        this.props.dispatch(listPublics())
    }

    render() {
        return (
            <section id="player">
				<div className="row">
					<div className="col-md-5">
						<PublicTable />
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
	// 					<PublicTable />
	// 				</div>
	// 				<div className="col-md-7">
	// 					<PublicDetail />
	// 				</div>
	// 			</div>
	// 			<div className="row">
	// 				<div className="col-xs-12">
	// 					<PublicFilter />
	// 				</div>	
	// 			</div>
	// 		</section>
    //     )
    // }
}

export default connect()(Public)
