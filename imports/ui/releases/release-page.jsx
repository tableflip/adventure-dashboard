import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import Projects from '../../api/projects/projects'
import Releases from '../../api/releases/releases'

const ReleasePage = ({ loading, project, release }) => (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1>{project.name} ({release.version})</h1>
        {/* TODO: release stats here */}
        <h2>Tester Feedback</h2>
        {release.feedback.length ? (
          <ul>
            {release.feedback.map(({ id, title, body }) => (
              <li key={id}>
                <h3>{title}</h3>
                <div>{body}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tester feedback yet</p>
        )}
      </div>
    )}
  </div>
)

export default createContainer(({ params }) => {
  const { slug, version } = params

  let subs = [ Meteor.subscribe('project', { slug }) ]

  const project = Projects.findOne({ slug })

  if (project) {
    subs = subs.concat(
      Meteor.subscribe('release', { projectId: project._id, version })
    )
  }

  const loading = !subs.every((s) => s.ready())

  return {
    loading,
    project,
    release: Releases.findOne({ version })
  }
}, ReleasePage)
