import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import Routes from '../../ui/routes'

Meteor.startup(() => {
  render((
    <Routes history={browserHistory} />
  ), document.getElementById('react-root'))
})
