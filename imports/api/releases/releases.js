import { Mongo } from 'meteor/mongo'
import nothing from '../../lib/nothing'
import Joi from 'joi-browser'
import { ProjectRefSchema } from '../projects/project-ref'

const Releases = new Mongo.Collection('Releases')

Releases.allow(nothing)

export default Releases

export const ReleaseSchema = Joi.object().keys({
  project: ProjectRefSchema.required(),
  version: Joi.string().required(),
  // An array of github isssues tagged "tester comment" or "tester bug"
  feedback: Joi.array().items(Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    labels: Joi.array().items(Joi.object().keys({
      name: Joi.string().required()
    }).options({ allowUnknown: true })).required()
  }).options({ allowUnknown: true })).required()
})
