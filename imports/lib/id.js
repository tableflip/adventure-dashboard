import Joi from 'joi-browser'

export const idRegex = /^[23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/
export const IdSchema = Joi.string().regex(idRegex)
