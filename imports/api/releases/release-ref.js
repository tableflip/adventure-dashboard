import Joi from 'joi-browser'
import { IdSchema } from '../../lib/id'

export const ReleaseRefSchema = Joi.object().keys({
  _id: IdSchema.required(),
  version: Joi.string().required()
  // TODO: Some other denormed data?
})
