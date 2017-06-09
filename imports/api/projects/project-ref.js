import Joi from 'joi-browser'
import { IdSchema } from '../../lib/id'

export const ProjectRefSchema = Joi.object().keys({
  _id: IdSchema.required()
})
