import { Meteor } from 'meteor/meteor'
import Joi from 'joi-browser'
import Releases from '../releases'
import { IdSchema } from '../../../lib/id'

Meteor.publish('release', ({ projectId, version }) => {
  Joi.assert({ projectId, version }, Joi.object().keys({
    projectId: IdSchema.required(),
    version: Joi.string().required()
  }))

  return Releases.find({ 'project._id': projectId, version })
})
