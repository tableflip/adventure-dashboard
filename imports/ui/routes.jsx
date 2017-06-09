import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './layout'
import HomePage from './home/home-page'
import ProjectPage from './projects/project-page'
import ReleasePage from './releases/release-page'

const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path='project/:slug' component={ProjectPage} />
        <Route path='project/:slug/release/:version' component={ReleasePage} />
      </Route>
    </Router>
  )
}

export default Routes
