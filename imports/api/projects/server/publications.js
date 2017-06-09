import { Meteor } from 'meteor/meteor'
import Joi from 'joi-browser'
import Projects from '../projects'
import { projects } from '../queries'

Meteor.publish('projects', projects)

Meteor.publish('project', ({ slug }) => {
  Joi.assert(slug, Joi.string().required())
  return Projects.find({ slug })
})
