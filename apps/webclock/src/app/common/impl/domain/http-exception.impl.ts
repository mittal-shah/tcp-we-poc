import { AnyType } from '../../declarations/types'

export default class HttpExceptionImpl {
  InnerException: AnyType = null

  Type = 'Unknown'
}
