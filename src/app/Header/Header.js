import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'

import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
          <AppBar title='My Event Planner'>
            <Navigation type='horizontal'>
              <Link to='/'>Home</Link>&nbsp; &nbsp;
      	      <Link to='/profile'>Admin Profiles</Link>
            </Navigation>
          </AppBar>
        )
    }
}
