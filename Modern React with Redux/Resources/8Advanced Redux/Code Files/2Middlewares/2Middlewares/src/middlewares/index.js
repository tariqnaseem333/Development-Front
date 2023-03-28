/**
* applying all the middlewares - only logger is to be applied
*/

import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  logger,
)

