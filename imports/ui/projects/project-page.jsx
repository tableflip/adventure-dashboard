import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'
import Projects from '../../api/projects/projects'

const ProjectPage = ({ loading, project }) => (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1>{project.name}</h1>
        <h2>Releases</h2>
        {project.releases.length ? (
          <ul>
            {project.releases.map(({ version }) => (
              <li key={version}>
                <Link to={`/project/${project.slug}/release/${version}`}>{version}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No releases yet</p>
        )}
      </div>
    )}
  </div>
)

export default createContainer(({ params }) => {
  const { slug } = params
  const subs = [ Meteor.subscribe('project', { slug }) ]
  const loading = !subs.every((s) => s.ready())
  return { loading, project: Projects.findOne({ slug }) }
}, ProjectPage)
