import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'
import { projects } from '../../api/projects/queries'

const HomePage = ({ loading, projects }) => (
  <div>
    <h1>Dashboard</h1>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {projects.map(({ name, slug }) => (
          <li key={slug}>
            <Link to={`/project/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default createContainer(() => {
  const subs = [ Meteor.subscribe('projects') ]
  const loading = !subs.every((s) => s.ready())
  return { loading, projects: projects().fetch() }
}, HomePage)
