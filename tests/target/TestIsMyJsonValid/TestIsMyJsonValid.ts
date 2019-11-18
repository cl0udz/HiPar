import createError = require('http-errors')
import createValidator = require('is-my-json-valid')
import { Request, Response, NextFunction } from 'express'

const personValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
  },
  required: [
    'name'
  ]
})

export function post (req: Request, res: Response, next: NextFunction) {
  // Here req.body is typed as: any

  if (!personValidator(req.body)) {
    throw createError(400, { errors: personValidator.errors })
  }

  // Here req.body is typed as: { name: string, age: number | undefined }
}