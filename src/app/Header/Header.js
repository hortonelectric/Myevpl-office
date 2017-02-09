import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'

export default class Header extends React.Component {

    render() {
        return (
          <AppBar title='My Event Planner'>
            <Navigation type='horizontal'>
              <a href='/' label='Home' icon='inbox'>Home</a>&nbsp; &nbsp;
      	      <a href='/admin/profile' active label='Admin Profiles' icon='person'>Admin Profiles</a>
            </Navigation>
          </AppBar>
        )
    }
}
