import { Mongo } from 'meteor/mongo'
import nothing from '../../lib/nothing'
import Joi from 'joi-browser'
import { ReleaseRefSchema } from '../releases/release-ref'

const Projects = new Mongo.Collection('Projects')

Projects.allow(nothing)

export default Projects

export const ProjectSchema = Joi.object().keys({
  // Name of the project (clients can have more than on project)
  name: Joi.string().required(),
  // Project slug for pretty url
  slug: Joi.string().required(),
  // List of releases (kept in sync with SSB)
  releases: Joi.array().items(ReleaseRefSchema).required()
  // Later:
  // client: ClientRefSchema
  // Repos for the project:
  // tableflip/foo, tableflip/bar
  // repos: Joi.array().items(Joi.string()).required(),
})
