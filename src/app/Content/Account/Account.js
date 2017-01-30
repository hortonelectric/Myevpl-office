import React, {Component} from 'react'
import { connect } from 'react-redux'

import AccountTable from './container/AccountTable'
import AccountDetail from './container/AccountDetail'
import AccountFilter from './AccountFilter/AccountFilter'

import { listAccounts,listAccountsOnline } from './middleware/middleware'

class Account extends Component {

    componentWillMount = () => {
        this.props.dispatch(listAccounts())
        this.props.dispatch(listAccountsOnline())
    }

    render() {
        return (
            <section id="player">
				<div className="row">
					<div className="col-md-5">
						<AccountTable />
					</div>
					<div className="col-md-7">
						<AccountDetail />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<AccountFilter />
					</div>	
				</div>
			</section>
        )
    }
}

export default connect()(Account)
